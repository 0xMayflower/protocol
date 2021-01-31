//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol";

/**
 * @title Commitment Token
 * @notice Commitment Token is used for redeeming stable coins, buying crypto products
 *      from the village market and mining vision tokens. It is minted by the admin and
 *      given to the contributors. The amount of mintable token is limited to the balance
 *      of redeemable stable coins. Therefore, it's 1:1 pegged to the given stable coin
 *      or expected to have higher value than the redeemable coin values.
 */
contract CommitmentToken is ERC20Burnable {
    address public minter;

    constructor() ERC20("DAO Commitment Token", "DCT") {
        minter = msg.sender;
    }

    modifier onlyMinter {
        require(msg.sender == minter, "Not a minter");
        _;
    }

    function mint(address to, uint256 amount) public onlyMinter {
        _mint(to, amount);
    }

    function setMinter(address _minter) public onlyMinter {
        minter = _minter;
    }
}
