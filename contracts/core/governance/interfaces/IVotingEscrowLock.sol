//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;
pragma abicoder v2;

import "@openzeppelin/contracts/token/ERC721/IERC721.sol";
import {Lock} from "../../../core/governance/libraries/VotingEscrowLib.sol";

interface IVotingEscrowLock is IERC721 {
    function locks(uint256 tokenId)
        external
        view
        returns (uint256 amount, uint256 end);

    function createLock(uint256 amount, uint256 lockEnd) external;

    function increaseAmount(uint256 tokenId, uint256 amount) external;

    function extendLock(uint256 tokenId, uint256 end) external;

    function withdraw(uint256 tokenId) external;

    function totalLockedSupply() external view returns (uint256);

    function MAXTIME() external view returns (uint256);

    function baseToken() external view returns (address);

    function veToken() external view returns (address);
}
