// SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "../libraries/MiningPool.sol";
import "../libraries/ERC20Recoverer.sol";

contract CommitmentMining is MiningPool, ERC20Recoverer {
    using SafeMath for uint256;
    CommitmentToken public immutable commitmentToken;

    constructor(
        address _gov,
        address _visionToken,
        address _visionTokenEmitter,
        address _commitmentToken
    ) MiningPool(_visionToken, _visionTokenEmitter) ERC20Recoverer() {
        commitmentToken = CommitmentToken(_commitmentToken);
        ERC20Recoverer.disablePermanently(_commitmentToken);
        ERC20Recoverer.disablePermanently(_visionToken);
        ERC20Recoverer.setRecoverer(_gov);
    }

    function burn(uint256 amount) public {
        _dispatchMiners(amount);
        commitmentToken.burnFrom(msg.sender, amount);
    }

    function mine() public nonReentrant recordMining(msg.sender) {
        // transfer vision token
        _mine();
        // withdraw all miners
        uint256 numOfMiners = dispatchedMiners[msg.sender];
        _withdrawMiners(numOfMiners);
    }
}
