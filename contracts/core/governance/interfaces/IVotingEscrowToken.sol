//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma abicoder v2;

import {Point} from "../../../core/governance/libraries/VotingEscrowLib.sol";
import {IERC20} from "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface IVotingEscrowToken is IERC20 {
    function veLocker() external view returns (address);

    function checkpoint(uint256 maxRecord) external;

    function totalSupplyAt(uint256 timestamp) external view returns (uint256);

    function balanceOfAt(address account, uint256 timestamp)
        external
        view
        returns (uint256);

    function balanceOfLock(uint256 veLockId) external view returns (uint256);

    function balanceOfLockAt(uint256 veLockId, uint256 timestamp)
        external
        view
        returns (uint256);
}
