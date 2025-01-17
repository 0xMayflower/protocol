//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Enumerable.sol";
import "@openzeppelin/contracts/math/Math.sol";
import "@openzeppelin/contracts/proxy/Initializable.sol";
import "../../../core/governance/libraries/VotingEscrowLib.sol";
import "../../../core/governance/libraries/VotingEscrowLock.sol";
import "../../../core/governance/interfaces/IVotingEscrowToken.sol";
import "../../../utils/Int128.sol";

/**
 * @dev Voting Escrow Token is the solidity implementation of veCRV
 *      Its original code https://github.com/curvefi/curve-dao-contracts/blob/master/contracts/VotingEscrow.vy
 */

contract VotingEscrowToken is ERC20, IVotingEscrowToken, Initializable {
    using Int128 for uint256;

    address public override veLocker;

    uint256 constant MAXTIME = 4 * (365 days);
    uint256 constant MULTIPLIER = 1e18;

    mapping(uint256 => int128) public slopeChanges;
    Point[] public pointHistory;
    mapping(uint256 => Point[]) public lockPointHistory;

    string private _name;
    string private _symbol;

    modifier onlyVELock() {
        require(msg.sender == veLocker, "Only ve lock contract can call this.");
        _;
    }

    constructor() ERC20("", "") {
        // this constructor will not be called since it'll be cloned by proxy pattern.
        // initalize() will be called instead.
    }

    function initialize(
        string memory _veTokenName,
        string memory _veTokenSymbol,
        address _veLocker
    ) public initializer {
        _name = _veTokenName;
        _symbol = _veTokenSymbol;
        veLocker = _veLocker;
    }

    function checkpoint(uint256 maxRecord) external override {
        // Point memory lastPoint = _recordPointHistory();
        // pointHistory[epoch] = lastPoint;
        _recordPointHistory(maxRecord);
    }

    function checkpoint(
        uint256 veLockId,
        Lock calldata oldLock,
        Lock calldata newLock
    ) external onlyVELock {
        // Record history
        _recordPointHistory(0);

        // Compute points
        (Point memory oldLockPoint, Point memory newLockPoint) =
            _computePointsFromLocks(oldLock, newLock);

        _updateLastPoint(oldLockPoint, newLockPoint);

        _recordLockPointHistory(
            veLockId,
            oldLock,
            newLock,
            oldLockPoint,
            newLockPoint
        );
    }

    // View functions

    function name() public view virtual override returns (string memory) {
        return _name;
    }

    function symbol() public view virtual override returns (string memory) {
        return _symbol;
    }

    function balanceOf(address account)
        public
        view
        override(IERC20, ERC20)
        returns (uint256)
    {
        uint256 numOfLocks = IERC721Enumerable(veLocker).balanceOf(account);
        uint256 balance = 0;
        for (uint256 i = 0; i < numOfLocks; i++) {
            uint256 veLockId =
                IERC721Enumerable(veLocker).tokenOfOwnerByIndex(account, i);
            balance += balanceOfLock(veLockId);
        }
        return balance;
    }

    function balanceOfAt(address account, uint256 timestamp)
        public
        view
        override
        returns (uint256)
    {
        uint256 numOfLocks = IERC721Enumerable(veLocker).balanceOf(account);
        uint256 balance = 0;
        for (uint256 i = 0; i < numOfLocks; i++) {
            uint256 veLockId =
                IERC721Enumerable(veLocker).tokenOfOwnerByIndex(account, i);
            balance += balanceOfLockAt(veLockId, timestamp);
        }
        return balance;
    }

    function balanceOfLock(uint256 veLockId)
        public
        view
        override
        returns (uint256)
    {
        return balanceOfLockAt(veLockId, block.timestamp);
    }

    function balanceOfLockAt(uint256 veLockId, uint256 timestamp)
        public
        view
        override
        returns (uint256)
    {
        (bool success, Point memory point) =
            _searchClosestPoint(lockPointHistory[veLockId], timestamp);
        if (success) {
            int128 bal =
                point.bias -
                    point.slope *
                    (timestamp.toInt128() - point.timestamp.toInt128());
            return bal > 0 ? uint256(bal) : 0;
        } else {
            return 0;
        }
    }

    function totalSupply()
        public
        view
        override(IERC20, ERC20)
        returns (uint256)
    {
        return totalSupplyAt(block.timestamp);
    }

    function totalSupplyAt(uint256 timestamp)
        public
        view
        override
        returns (uint256)
    {
        (bool success, Point memory point) =
            _searchClosestPoint(pointHistory, timestamp);
        if (success) {
            return _computeSupplyFrom(point, timestamp);
        } else {
            return 0;
        }
    }

    // checkpoint() should be called if it emits out of gas error.
    function _computeSupplyFrom(Point memory point, uint256 timestamp)
        internal
        view
        returns (uint256)
    {
        require(point.timestamp <= timestamp, "scan only to the rightward");
        Point memory _point = point;
        uint256 x = (point.timestamp / 1 weeks) * 1 weeks;

        // find the closest point
        do {
            x = Math.min(x + 1 weeks, timestamp);
            uint256 delta = Math.min(timestamp - x, 1 weeks);
            _point.timestamp = x;
            _point.bias -= (_point.slope) * int128(delta);
            _point.slope += slopeChanges[x];
            _point.bias = _point.bias > 0 ? _point.bias : 0;
            _point.slope = _point.slope > 0 ? _point.slope : 0;
        } while (timestamp != x);
        int128 y = _point.bias - _point.slope * (timestamp - x).toInt128();
        return y > 0 ? uint256(y) : 0;
    }

    function _computePointsFromLocks(Lock memory oldLock, Lock memory newLock)
        internal
        view
        returns (Point memory oldPoint, Point memory newPoint)
    {
        if (oldLock.end > block.timestamp && oldLock.amount > 0) {
            oldPoint.slope = (oldLock.amount / MAXTIME).toInt128();
            oldPoint.bias =
                oldPoint.slope *
                int128(oldLock.end - block.timestamp);
        }
        if (newLock.end > block.timestamp && newLock.amount > 0) {
            newPoint.slope = (newLock.amount / MAXTIME).toInt128();
            newPoint.bias =
                newPoint.slope *
                int128((newLock.end - block.timestamp));
        }
    }

    function _recordPointHistory(uint256 maxRecord) internal {
        // last_point: Point = Point({bias: 0, slope: 0, ts: block.timestamp})
        Point memory _point;
        // Get the latest right most point
        if (pointHistory.length > 0) {
            _point = pointHistory[pointHistory.length - 1];
        } else {
            _point = Point({bias: 0, slope: 0, timestamp: block.timestamp});
        }

        // fill history
        uint256 timestamp = block.timestamp;
        uint256 x = (_point.timestamp / 1 weeks) * 1 weeks;
        // record intermediate histories
        uint256 i = 0;
        do {
            x = Math.min(x + 1 weeks, timestamp);
            uint256 delta = Math.min(timestamp - x, 1 weeks);
            _point.timestamp = x;
            _point.bias -= (_point.slope) * int128(delta);
            _point.slope += slopeChanges[x];
            _point.bias = _point.bias > 0 ? _point.bias : 0;
            _point.slope = _point.slope > 0 ? _point.slope : 0;
            pointHistory.push(_point);
            i++;
        } while (timestamp != x && i != maxRecord);
    }

    function _recordLockPointHistory(
        uint256 veLockId,
        Lock memory oldLock,
        Lock memory newLock,
        Point memory oldPoint,
        Point memory newPoint
    ) internal {
        require(
            (oldLock.end / 1 weeks) * 1 weeks == oldLock.end,
            "should be exact epoch timestamp"
        );
        require(
            (newLock.end / 1 weeks) * 1 weeks == newLock.end,
            "should be exact epoch timestamp"
        );
        int128 oldSlope = slopeChanges[oldLock.end];
        int128 newSlope;
        if (newLock.end != 0) {
            if (newLock.end == oldLock.end) {
                newSlope = oldSlope;
            } else {
                newSlope = slopeChanges[newLock.end];
            }
        }
        if (oldLock.end > block.timestamp) {
            oldSlope += oldPoint.slope;
            if (newLock.end == oldLock.end) {
                oldSlope -= newPoint.slope;
            }
            slopeChanges[oldLock.end] = oldSlope;
        }
        if (newLock.end > block.timestamp) {
            if (newLock.end > oldLock.end) {
                newSlope -= newPoint.slope;
                slopeChanges[newLock.end] = newSlope;
            }
        }
        newPoint.timestamp = block.timestamp;
        lockPointHistory[veLockId].push(newPoint);
    }

    function _updateLastPoint(
        Point memory oldLockPoint,
        Point memory newLockPoint
    ) internal {
        if (pointHistory.length == 0) {
            pointHistory.push(
                Point({bias: 0, slope: 0, timestamp: block.timestamp})
            );
        }
        Point memory newLastPoint =
            _applyLockUpdateToLastPoint(
                oldLockPoint,
                newLockPoint,
                pointHistory[pointHistory.length - 1]
            );
        pointHistory[pointHistory.length - 1] = newLastPoint;
    }

    function _applyLockUpdateToLastPoint(
        Point memory oldPoint,
        Point memory newPoint,
        Point memory lastPoint
    ) internal pure returns (Point memory newLastPoint) {
        newLastPoint = lastPoint;
        newLastPoint.slope += (newPoint.slope - oldPoint.slope);
        newLastPoint.bias += (newPoint.bias - oldPoint.bias);
        if (newLastPoint.slope < 0) {
            newLastPoint.slope = 0;
        }
        if (newLastPoint.bias < 0) {
            newLastPoint.bias = 0;
        }
    }

    function _searchClosestPoint(Point[] storage history, uint256 timestamp)
        internal
        view
        returns (bool success, Point memory point)
    {
        require(timestamp <= block.timestamp, "Only past blocks");
        if (history.length == 0) {
            return (false, point);
        } else if (timestamp < history[0].timestamp) {
            // block num is before the first lock
            return (false, point);
        } else if (timestamp == block.timestamp) {
            return (true, history[history.length - 1]);
        }
        // binary search
        uint256 min = 0;
        uint256 max = history.length - 1;
        uint256 mid;
        for (uint256 i = 0; i < 128; i++) {
            if (min >= max) {
                break;
            }
            mid = (min + max + 1) / 2;
            if (history[mid].timestamp <= timestamp) {
                min = mid;
            } else {
                max = mid - 1;
            }
        }
        return (true, history[min]);
    }

    function _beforeTokenTransfer(
        address,
        address,
        uint256
    ) internal pure override {
        revert("Non-transferrable. You can only transfer locks.");
    }
}
