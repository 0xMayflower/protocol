//SPDX-License-Identifier: Unlicense
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "../libraries/ExchangeLib.sol";
import "../libraries/ERC20Recoverer.sol";
import "../interfaces/ILaborMarket.sol";
import "../tokens/CommitmentToken.sol";
import "../governance/Governed.sol";

struct Project {
    address budgetOwner;
    uint256 budget;
}

/**
 * @notice LaborMarket is the $COMMITMENT token minter. It allows deal managers mint $COMMITMENT token.
 */
contract LaborMarket is ERC20Recoverer, Governed, ILaborMarket {
    using SafeMath for uint256;
    using SafeERC20 for IERC20;

    CommitmentToken immutable commitmentToken;

    IERC20 immutable basicCurrency;

    uint256 public priceOfCommitmentToken = 20000; // denominator = 10000, ~= $2

    mapping(address => bool) public dealManagers;

    mapping(bytes32 => Project) public projects;

    event DealManagerUpdated(address indexed dealManager);

    constructor(
        address _gov,
        address _commitmentToken,
        address _basicCurrency
    ) ERC20Recoverer() Governed() {
        commitmentToken = CommitmentToken(_commitmentToken);
        basicCurrency = IERC20(_basicCurrency);
        ERC20Recoverer.disablePermanently(_basicCurrency);
        ERC20Recoverer.disablePermanently(_commitmentToken);
        ERC20Recoverer.setRecoverer(_gov);
        Governed.setGovernance(_gov);
    }

    modifier onlyDealManager() {
        require(
            dealManagers[msg.sender] || msg.sender == gov,
            "Not authorized"
        );
        _;
    }

    function redeem(uint256 amount) public {
        require(
            commitmentToken.balanceOf(msg.sender) >= amount,
            "Not enough balance"
        );
        commitmentToken.burnFrom(msg.sender, amount);
        basicCurrency.transfer(msg.sender, amount);
    }

    function payInsteadOfWorking(uint256 amount) public {
        uint256 amountToPay = amount.mul(priceOfCommitmentToken).div(10000);
        basicCurrency.safeTransferFrom(msg.sender, address(this), amountToPay);
        _mintCommitmentToken(msg.sender, amount);
    }

    function executeBudget(
        bytes32 projectId,
        address to,
        uint256 amount
    ) public {
        Project storage project = projects[projectId];
        require(project.budgetOwner == msg.sender);
        require(project.budget >= amount);
        project.budget = project.budget - amount;
        commitmentToken.transfer(to, amount);
    }

    function createProject(
        bytes32 projId,
        address budgetOwner,
        uint256 budget
    ) public override onlyDealManager {
        Project storage proj = projects[projId];
        require(proj.budgetOwner == address(0), "Same project already exists");
        proj.budgetOwner = budgetOwner;
        allocateBudget(projId, budget);
    }

    function allocateBudget(bytes32 projId, uint256 budget)
        public
        override 
        onlyDealManager
    {
        require(budget <= remainingBudget());
        _mintCommitmentToken(address(this), budget);
        Project storage proj = projects[projId];
        proj.budget = proj.budget.add(budget);
    }

    function setDealManager(address dealManager, bool active) public governed {
        if (dealManagers[dealManager] != active) {
            emit DealManagerUpdated(dealManager);
        }
        dealManagers[dealManager] = active;
    }

    function remainingBudget() public view returns (uint256) {
        uint256 currentSupply = commitmentToken.totalSupply();
        uint256 currentRedeemable = basicCurrency.balanceOf(address(this));
        return currentRedeemable.sub(currentSupply);
    }

    function _mintCommitmentToken(address to, uint256 amount) internal {
        require(amount <= remainingBudget(), "Out of budget");
        commitmentToken.mint(to, amount);
    }
}
