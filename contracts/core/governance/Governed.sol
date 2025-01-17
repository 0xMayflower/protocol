//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

import "../../utils/Utils.sol";

contract Governed {
    using Utils for address[];

    bool private initialized;

    address public gov;

    uint256 public anarchizedAt = 0;

    uint256 public forceAnarchizeAt = 0;

    event NewGovernance(
        address indexed _prevGovernance,
        address indexed _newGovernance
    );
    event Anarchized();

    constructor() {
        initialize(msg.sender);
    }

    modifier governed {
        require(msg.sender == gov, "Not authorized");
        _;
    }

    modifier permit(address[] memory list) {
        (bool exists, ) = list.find(msg.sender);
        require(exists, "Not authorized");
        _;
    }

    function initialize(address _gov) public {
        require(!initialized, "Initialized");
        initialized = true;
        gov = _gov;
    }

    function setGovernance(address _gov) public governed {
        require(_gov != address(0), "Use anarchize() instead.");
        _setGovernance(_gov);
    }

    function setAnarchyPoint(uint256 timestamp) public governed {
        require(forceAnarchizeAt == 0, "Cannot update.");
        require(
            timestamp >= block.timestamp,
            "Timepoint should be in the future."
        );
        forceAnarchizeAt = timestamp;
    }

    function anarchize() public governed {
        _anarchize();
    }

    function forceAnarchize() public {
        require(forceAnarchizeAt != 0, "Cannot disband the gov");
        require(block.timestamp >= forceAnarchizeAt, "Cannot disband the gov");
        _anarchize();
    }

    function _anarchize() internal {
        _setGovernance(address(0));
        anarchizedAt = block.timestamp;
        emit Anarchized();
    }

    function _setGovernance(address _gov) internal {
        emit NewGovernance(gov, _gov);
        gov = _gov;
    }
}
