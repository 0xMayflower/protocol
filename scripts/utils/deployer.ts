// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import hre, { ethers } from "hardhat";
import { Contract } from "ethers";
import merge from "deepmerge";
import fs from "fs";
import {
  Deployed,
  ContractNames,
  DeployableContracts,
  MyNetwork,
} from "../../deployed";

function deployFileName(): string {
  const network: MyNetwork = hre.network.name as MyNetwork;
  const fileName = ["mainnet", "rinkeby"].includes(network)
    ? "deployed.json"
    : "deployed.dev.json";
  return fileName;
}

export function getDeployed(): Deployed {
  const fileName = deployFileName();
  if (fs.existsSync(fileName)) {
    const data = fs.readFileSync(fileName, "utf-8");
    const deployed = JSON.parse(data);
    return deployed;
  }
  return {};
}

export function record(
  network: MyNetwork,
  contract: ContractNames,
  address: string
) {
  const deployed = getDeployed();
  const updated = merge(deployed, {
    [network]: { [contract]: address },
  });
  const fileName = deployFileName();
  fs.writeFileSync(fileName, JSON.stringify(updated));
}

export async function autoDeploy(
  name: DeployableContracts,
  ...args: any[]
): Promise<Contract> {
  const network: MyNetwork = hre.network.name as MyNetwork;
  const deployed = getDeployed();
  const deployedAddress = deployed[network]?.[name];

  if (network === "hardhat") {
    const contract = await (await ethers.getContractFactory(name)).deploy(
      ...args
    );
    return contract;
  } else if (deployedAddress) {
    console.log(`Contract ${name} is already deployed at ${deployedAddress}`);
    const contract = await ethers.getContractAt(name, deployedAddress);
    return contract;
  } else {
    const contract = await (await ethers.getContractFactory(name)).deploy(
      ...args
    );
    record(network, name, contract.address);
    console.log(`Deployed ${name} at ${contract.address}`);
    return contract;
  }
}

export async function getDeployedContract(
  deployed: Deployed,
  name: ContractNames,
  artifactName?: string
) {
  const network: MyNetwork = hre.network.name as MyNetwork;
  const deployedAddress = deployed[network]?.[name];
  if (!deployedAddress) throw Error(`${name} is not deployed on ${network}`);
  const contract = await ethers.getContractAt(
    artifactName || name,
    deployedAddress
  );
  return contract;
}
