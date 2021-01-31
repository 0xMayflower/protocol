//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

interface IProductFactory {
    function create(
        address _manufacturer,
        address _marketplace,
        string memory _name,
        string memory _symbol
    ) external returns (address product);
}