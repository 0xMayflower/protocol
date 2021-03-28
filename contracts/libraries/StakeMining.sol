// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "./ERC20Recoverer.sol";
import "./MiningPool.sol";

contract StakeMining is MiningPool {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    constructor() MiningPool() {}

    function stake(uint256 amount) public {
        _dispatchMiners(amount);
        baseToken.safeTransferFrom(msg.sender, address(this), amount);
    }

    function withdraw(uint256 amount) public {
        _withdrawMiners(amount);
        baseToken.safeTransfer(msg.sender, amount);
    }

    function mine() public {
        _mine();
    }

    function exit() public {
        mine();
        withdraw(dispatchedMiners[msg.sender]);
    }
}