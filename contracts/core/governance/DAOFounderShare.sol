//SPDX-License-Identifier: unlicensed
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/token/ERC1155/ERC1155Burnable.sol";
import "@openzeppelin/contracts/token/ERC721/IERC721Metadata.sol";
import "@openzeppelin/contracts/proxy/Initializable.sol";
import "../../apps/IWorkhard.sol";
import "../../core/governance/interfaces/IDAOFounderShare.sol";

contract DAOFounderShare is ERC1155Burnable, IDAOFounderShare {
    using SafeMath for uint256;

    address public immutable workhard;

    mapping(uint256 => bool) public frozen;

    // workhard will deploy this
    constructor() ERC1155("") {
        workhard = msg.sender;
    }

    modifier onlyMinter(uint256 id) {
        bool allowed = false;
        if (workhard == msg.sender) {
            allowed = true;
        } else {
            allowed = IERC721(workhard).ownerOf(id) == msg.sender;
        }
        require(allowed, "Not allowed");
        _;
    }

    function recordContribution(
        address to,
        uint256 id,
        uint256 amount
    ) public override onlyMinter(id) returns (bool success) {
        if (!frozen[id]) {
            bytes memory zero;
            _mint(to, id, amount, zero);
            return true;
        } else {
            return false;
        }
    }

    function freeze(uint256 id) external override onlyMinter(id) {
        require(!frozen[id], "Already frozen");
        frozen[id] = true;
    }

    function uri(uint256 id)
        external
        view
        override(ERC1155, IERC1155MetadataURI)
        returns (string memory)
    {
        return IERC721Metadata(workhard).tokenURI(id);
    }
}
