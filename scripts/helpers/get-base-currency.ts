import hre, { ethers } from "hardhat";
import { parseEther } from "ethers/lib/utils";
import { Contract } from "ethers";

const DAI = "0x6B175474E89094C44Da98b954EedeAC495271d0F";

export async function getBaseCurrency(deployerAddress): Promise<Contract> {
  if (hre.network.name === "mainnet") {
    const contract = await ethers.getContractAt("IERC20", DAI);
    return contract;
  } else {
    const ERC20 = await ethers.getContractFactory("TestERC20");
    const contract = await ERC20.deploy();
    await contract.mint(deployerAddress, parseEther("10000"));
    return contract;
  }
}