//SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.7.0;

import "@openzeppelin/contracts/math/SafeMath.sol";
import "@openzeppelin/contracts/token/ERC20/SafeERC20.sol";
import "@openzeppelin/contracts/utils/ReentrancyGuard.sol";
import "../libraries/Product.sol";
import "../libraries/ERC20Recoverer.sol";
import "../interfaces/IVisionFarm.sol";
import "../interfaces/IProduct.sol";
import "../interfaces/IProductFactory.sol";
import "../interfaces/ICommitmentToken.sol";
import "../governance/Governed.sol";

struct ProductInfo {
    uint256 price; // in commitment token
    uint256 profitRate; // amount goes to the manufacturer
    uint256 stock; // amount of remaining stocks
}

contract Marketplace is ERC20Recoverer, Governed, ReentrancyGuard {
    using SafeERC20 for IERC20;
    using SafeMath for uint256;

    ICommitmentToken immutable commitmentToken;

    IProductFactory public factory;

    IVisionFarm immutable visionFarm;

    uint256 public taxRate = 2000; // denominator is 10,000

    mapping(address => ProductInfo) public products;

    event FactoryChanged(address prevFactory, address newFactory);

    event TaxRateUpdated(uint256 taxRate);

    event ProductLaunched(address indexed manufacturer, address product);

    event PriceUpdated(address indexed product, uint256 price);

    event ProfitRateUpdated(address indexed product, uint256 profitRate);

    event Supply(address indexed product, uint256 amount);

    uint256 public constant RATE_DENOMINATOR = 10000;

    constructor(
        address _gov,
        address _factory,
        address _commitmentToken,
        address _visionFarm
    ) ERC20Recoverer() Governed() {
        commitmentToken = ICommitmentToken(_commitmentToken);
        factory = IProductFactory(_factory);
        visionFarm = IVisionFarm(_visionFarm);
        ERC20Recoverer.setRecoverer(_gov);
        Governed.setGovernance(_gov);
        ICommitmentToken(_commitmentToken).approve(_visionFarm, uint256(0) - 1);
    }

    modifier onlyManufacturer(address product) {
        require(
            IProduct(product).manufacturer() == msg.sender,
            "Not the manufacturer."
        );
        _;
    }

    function buy(address product, uint256 amount)
        public
        nonReentrant
        returns (uint256[] memory tokenIds)
    {
        require(amount > 0, "cannot buy 0");
        // check the product is for sale
        ProductInfo storage prod = products[product];
        require(amount <= prod.stock, "Sold out");
        require(prod.stock > 0, "Not for sale.");
        uint256 totalPayment = prod.price.mul(amount); // SafeMath prevents overflow
        // Vision Tax
        uint256 visionTax = totalPayment.mul(taxRate).div(RATE_DENOMINATOR);
        // Burn tokens
        uint256 postTax = totalPayment.sub(visionTax);
        uint256 forManufacturer =
            postTax.mul(prod.profitRate).div(RATE_DENOMINATOR);
        uint256 amountToBurn = postTax.sub(forManufacturer);
        address manufacturer = IProduct(product).manufacturer();
        commitmentToken.transferFrom(msg.sender, address(this), visionTax);
        commitmentToken.transferFrom(msg.sender, manufacturer, forManufacturer);
        commitmentToken.burnFrom(msg.sender, amountToBurn);
        IVisionFarm(visionFarm).plantSeeds(address(commitmentToken), visionTax);
        // mint & give
        tokenIds = IProduct(product).deliver(msg.sender, amount);
        // decrease stock
        products[product].stock = products[product].stock.sub(amount);
        return tokenIds;
    }

    function launchNewProduct(
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        uint256 profitRate,
        uint256 price,
        uint256 initialStock
    ) public {
        address prodAddr =
            IProductFactory(factory).create(
                msg.sender,
                address(this),
                0,
                _name,
                _symbol,
                _baseURI
            );
        setPrice(prodAddr, price);
        setProfitRate(prodAddr, profitRate);
        addStocks(prodAddr, initialStock);
        emit ProductLaunched(msg.sender, prodAddr);
    }

    function launchNewProductWithMaxSupply(
        string memory _name,
        string memory _symbol,
        string memory _baseURI,
        uint256 profitRate,
        uint256 price,
        uint256 initialStock,
        uint256 maxSupply
    ) public {
        address prodAddr =
            IProductFactory(factory).create(
                msg.sender,
                address(this),
                maxSupply,
                _name,
                _symbol,
                _baseURI
            );
        setPrice(prodAddr, price);
        setProfitRate(prodAddr, profitRate);
        addStocks(prodAddr, initialStock);
        emit ProductLaunched(msg.sender, prodAddr);
    }

    function setPrice(address product, uint256 price)
        public
        onlyManufacturer(product)
    {
        // to prevent overflow
        require(price * 1000000000 > price, "Cannot be expensive too much");
        products[product].price = price;
        emit PriceUpdated(product, price);
    }

    /**
     * @notice The profit rate is based on the post-tax amount of the payment.
     *      For example, when the price is 10000 DCT, tax rate is 2000, and profit rate is 5000,
     *      2000 DCT will go to the vision farm, 4000 DCT will be burnt, and 4000 will be given
     *      to the manufacturer.
     */
    function setProfitRate(address product, uint256 profitRate)
        public
        onlyManufacturer(product)
    {
        require(profitRate <= RATE_DENOMINATOR, "Profit rate is too high");
        products[product].profitRate = profitRate;
        emit ProfitRateUpdated(product, profitRate);
    }

    function addStocks(address product, uint256 amount)
        public
        onlyManufacturer(product)
    {
        products[product].stock = products[product].stock.add(amount);
        emit Supply(product, amount);
    }

    function setTaxRate(uint256 rate) public governed {
        require(rate <= RATE_DENOMINATOR);
        taxRate = rate;
    }

    function setFactory(address _factory) public governed {
        emit FactoryChanged(address(factory), _factory);
        factory = IProductFactory(_factory);
    }
}
