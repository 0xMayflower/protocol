import hre, { ethers } from "hardhat";
import { Contract, constants } from "ethers";

import { autoDeploy, getDB, getRoleHash, record } from "./helper";
import { MyNetwork } from "../../src";

import {
  ERC20BurnMiningV1,
  ERC20StakeMiningV1,
  ERC20BurnMiningV1__factory,
  ERC20StakeMiningV1__factory,
  ERC20BurnMiningV1Factory,
  ERC20StakeMiningV1Factory,
  ERC721StakeMiningV1Factory,
  ERC1155StakeMiningV1Factory,
  ERC20BurnMiningV1Factory__factory,
  ERC20StakeMiningV1Factory__factory,
  ERC721StakeMiningV1Factory__factory,
  ERC1155StakeMiningV1Factory__factory,
  COMMIT,
  COMMIT__factory,
  DividendPool,
  DividendPool__factory,
  ERC20__factory,
  IERC20,
  IERC20__factory,
  JobBoard,
  JobBoard__factory,
  Marketplace,
  Marketplace__factory,
  StableReserve,
  StableReserve__factory,
  DAOFounderShare,
  DAOFounderShare__factory,
  TimelockedGovernance,
  TimelockedGovernance__factory,
  VISION,
  VisionEmitter,
  VisionEmitter__factory,
  VISION__factory,
  VoteCounter,
  VoteCounter__factory,
  VotingEscrowLock,
  VotingEscrowLock__factory,
  VotingEscrowToken,
  VotingEscrowToken__factory,
  WorkersUnion,
  WorkersUnion__factory,
  RIGHT__factory,
  GnosisSafe,
  GnosisSafe__factory,
  Workhard,
  Workhard__factory,
} from "../../src";
import { isAddress, parseEther } from "ethers/lib/utils";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";

export const WETH = "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2";
const UNISWAP_FACTORY = "0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f";
const SUSHISWAP_FACTORY = "0xC0AEe478e3658e2610c5F7A4A2E1777cE9e4f2Ac";

/** Deploy Workhard Common Contracts first*/
export async function getPool2Factory(
  signer: SignerWithAddress
): Promise<Contract> {
  const network = hre.network.name as MyNetwork;
  const deployed = await getDB();
  const deployedAddress = await deployed.get(`${network}.Pool2Factory`).value();
  let pool2Factory: Contract;
  if (deployedAddress) {
    pool2Factory = await ethers.getContractAt(
      "IUniswapV2Factory",
      deployedAddress
    );
  } else {
    if (["mainnet"].includes(network)) {
      pool2Factory = await ethers.getContractAt(
        "IUniswapV2Factory",
        SUSHISWAP_FACTORY // yay!
      );
    } else if (["rinkeby"].includes(network)) {
      pool2Factory = await ethers.getContractAt(
        "IUniswapV2Factory",
        UNISWAP_FACTORY
      );
    } else {
      const UniswapV2Factory = await ethers.getContractFactory(
        "UniswapV2Factory"
      );
      pool2Factory = await UniswapV2Factory.deploy(await signer.getAddress());
    }
  }
  record(hre.network.name as MyNetwork, "Pool2Factory", pool2Factory.address);
  return pool2Factory;
}

export async function getWETH(signer: SignerWithAddress): Promise<IERC20> {
  const network = hre.network.name as MyNetwork;
  let wethAddress: string;
  const deployed = await getDB();
  const deployedAddress = await deployed.get(`${network}.WETH`).value();
  if (deployedAddress) {
    wethAddress = deployedAddress;
  } else {
    if (["mainnet", "rinkeby"].includes(network)) {
      wethAddress = WETH;
    } else {
      const WETHFactory = await ethers.getContractFactory("WETH9", signer);
      const weth = await WETHFactory.deploy();
      wethAddress = weth.address;
    }
  }
  record(hre.network.name as MyNetwork, "WETH", wethAddress);
  return IERC20__factory.connect(wethAddress, signer);
}

export async function getERC20BurnMiningV1Factory(
  signer: SignerWithAddress
): Promise<ERC20BurnMiningV1Factory> {
  const erc20BurnMiningV1Factory = await autoDeploy("ERC20BurnMiningV1Factory");
  return ERC20BurnMiningV1Factory__factory.connect(
    erc20BurnMiningV1Factory.address,
    signer
  );
}

export async function getERC20StakeMiningV1Factory(
  signer: SignerWithAddress
): Promise<ERC20StakeMiningV1Factory> {
  const erc20StakeMiningV1Factory = await autoDeploy(
    "ERC20StakeMiningV1Factory"
  );
  return ERC20StakeMiningV1Factory__factory.connect(
    erc20StakeMiningV1Factory.address,
    signer
  );
}

export async function getERC721StakeMiningV1Factory(
  signer: SignerWithAddress
): Promise<ERC721StakeMiningV1Factory> {
  const erc721StakeMiningV1Factory = await autoDeploy(
    "ERC721StakeMiningV1Factory"
  );
  return ERC721StakeMiningV1Factory__factory.connect(
    erc721StakeMiningV1Factory.address,
    signer
  );
}

export async function getERC1155StakeMiningV1Factory(
  signer: SignerWithAddress
): Promise<ERC1155StakeMiningV1Factory> {
  const erc1155StakeMiningV1Factory = await autoDeploy(
    "ERC1155StakeMiningV1Factory"
  );
  return ERC1155StakeMiningV1Factory__factory.connect(
    erc1155StakeMiningV1Factory.address,
    signer
  );
}

/** Deploy Workhard Master DAO */

export async function getMultisig(
  signer: SignerWithAddress
): Promise<SignerWithAddress | GnosisSafe> {
  const network: MyNetwork = hre.network.name as MyNetwork;
  let walletAddress;
  if (network === "rinkeby") {
    walletAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
  } else if (network === "mainnet") {
    walletAddress = "0x6b175474e89094c44da98b954eedeac495271d0f";
  } else {
    return signer;
  }
  const safe = GnosisSafe__factory.connect(
    "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea",
    signer
  );
  return safe;
}

export async function getBaseCurrency(
  signer: SignerWithAddress
): Promise<IERC20> {
  const network: MyNetwork = hre.network.name as MyNetwork;
  const deployed = await getDB();
  const deployedAddress = await deployed.get(`${network}.BaseCurrency`).value();
  let stablecoin: string;
  if (deployedAddress) {
    stablecoin = deployedAddress;
  } else if (network === "rinkeby") {
    // rinkeby DAI
    stablecoin = "0x5592ec0cfb4dbc12d3ab100b257153436a1f0fea";
  } else if (network === "mainnet") {
    // mainnet DAI
    stablecoin = "0x6b175474e89094c44da98b954eedeac495271d0f";
  } else {
    // deploy!
    const mockERC20 = await new ERC20__factory(signer).deploy();
    stablecoin = mockERC20.address;
  }
  record(hre.network.name as MyNetwork, "BaseCurrency", stablecoin);
  return IERC20__factory.connect(stablecoin, signer);
}

export async function getTimelockedGovernance(
  signer: SignerWithAddress
): Promise<TimelockedGovernance> {
  const tg = await autoDeploy("TimelockedGovernance");
  return TimelockedGovernance__factory.connect(tg.address, signer);
}

export async function getVision(signer: SignerWithAddress): Promise<VISION> {
  const vision = await autoDeploy("VISION");
  return VISION__factory.connect(vision.address, signer);
}

export async function getCommit(signer: SignerWithAddress): Promise<COMMIT> {
  const commit = await autoDeploy("COMMIT");
  return COMMIT__factory.connect(commit.address, signer);
}

export async function getRight(
  signer: SignerWithAddress
): Promise<VotingEscrowToken> {
  const right = await autoDeploy("RIGHT");
  return RIGHT__factory.connect(right.address, signer);
}

export async function getStableReserve(
  signer: SignerWithAddress
): Promise<StableReserve> {
  const stableReserve = await autoDeploy("StableReserve");
  return StableReserve__factory.connect(stableReserve.address, signer);
}

export async function getJobBoard(
  signer: SignerWithAddress
): Promise<JobBoard> {
  const jobBoard = await autoDeploy("JobBoard");
  return JobBoard__factory.connect(jobBoard.address, signer);
}

export async function getMarketplace(
  signer: SignerWithAddress
): Promise<Marketplace> {
  const marketplace = await autoDeploy("Marketplace");
  return Marketplace__factory.connect(marketplace.address, signer);
}

export async function getDividendPool(
  signer: SignerWithAddress
): Promise<DividendPool> {
  const dividendPool = await autoDeploy("DividendPool");
  return DividendPool__factory.connect(dividendPool.address, signer);
}

export async function getVoteCounter(
  signer: SignerWithAddress
): Promise<VoteCounter> {
  const voteCounter = await autoDeploy("VoteCounter");
  return VoteCounter__factory.connect(voteCounter.address, signer);
}

export async function getWorkersUnion(
  signer: SignerWithAddress
): Promise<WorkersUnion> {
  const workersUnion = await autoDeploy("WorkersUnion");
  return WorkersUnion__factory.connect(workersUnion.address, signer);
}

export async function getVisionEmitter(
  signer: SignerWithAddress
): Promise<VisionEmitter> {
  const visionEmitter = await autoDeploy("VisionEmitter");
  return VisionEmitter__factory.connect(visionEmitter.address, signer);
}

export async function getVotingEscrow(
  signer: SignerWithAddress
): Promise<VotingEscrowLock> {
  const votingEscrow = await autoDeploy("VotingEscrowLock");
  return VotingEscrowLock__factory.connect(votingEscrow.address, signer);
}

/** Deploy WORKHARD DAO */

export async function getWorkhard(
  signer: SignerWithAddress
): Promise<Workhard> {
  const controller = {
    multisig: (await getMultisig(signer)).address,
    baseCurrency: (await getBaseCurrency(signer)).address,
    timelock: (await getTimelockedGovernance(signer)).address,
    vision: (await getVision(signer)).address,
    commit: (await getCommit(signer)).address,
    right: (await getRight(signer)).address,
    stableReserve: (await getStableReserve(signer)).address,
    jobBoard: (await getJobBoard(signer)).address,
    marketplace: (await getMarketplace(signer)).address,
    dividendPool: (await getDividendPool(signer)).address,
    voteCounter: (await getVoteCounter(signer)).address,
    workersUnion: (await getWorkersUnion(signer)).address,
    visionEmitter: (await getVisionEmitter(signer)).address,
    votingEscrow: (await getVotingEscrow(signer)).address,
  };
  const commons = {
    pool2Factory: (await getPool2Factory(signer)).address,
    weth: (await getWETH(signer)).address,
    erc20StakeMiningV1Factory: (await getERC20StakeMiningV1Factory(signer))
      .address,
    erc20BurnMiningV1Factory: (await getERC20BurnMiningV1Factory(signer))
      .address,
    erc721StakeMiningV1Factory: (await getERC721StakeMiningV1Factory(signer))
      .address,
    erc1155StakeMiningV1Factory: (await getERC1155StakeMiningV1Factory(signer))
      .address,
  };
  const deployed = await autoDeploy("Workhard", controller, commons);
  const workhardDAO = Workhard__factory.connect(deployed.address, signer);
  return workhardDAO;
}

export async function getFounderShare(
  signer: SignerWithAddress
): Promise<FounderShare> {
  const workhard = (await getWorkhard(signer)).address;
  return DAOFounderShare__Factory.connect(teamShare.address, signer);
}

export async function upgradeToMasterDAO(
  workhardDAO: Workhard,
  signer: SignerWithAddress
): Promise<void> {
  await workhardDAO.upgradeToDAO(0, {
    multisig: (await getMultisig(signer)).address,
    baseCurrency: (await getBaseCurrency(signer)).address,
    projectName: "Workhard Master Dev",
    projectSymbol: "WMD",
    visionName: "Workhard Master Vision",
    visionSymbol: "VISION",
    commitName: "Workhard Master Commit",
    commitSymbol: "COMMIT",
    rightName: "Workhard Master Right",
    rightSymbol: "RIGHT",
    minDelay: 86400,
    launchDelay: 86400 * 7 * 4,
    initialEmission: parseEther("24000000"),
    minEmissionRatePerWeek: 60,
    emissionCutRate: 3000,
    founderShare: 500,
  });
}

export async function launchMasterDAO(
  workhardDAO: Workhard,
  signer: SignerWithAddress
): Promise<void> {
  await workhardDAO.launch(0, 4750, 4750, 499, 1);
  // todo if airdrop pool decided, run launchHard() instead of launch() with detail emission settings
}

export async function forceRemoveSchedule(
  timelock: TimelockedGovernance,
  workersUnion: WorkersUnion,
  signer: SignerWithAddress
): Promise<void> {
  const isDevEnv = !["mainnet", "rinkeby"].includes(
    ethers.provider.network.name
  );
  const MULTISIG_WALLET = process.env.MULTISIG_WALLET;
  let multisig: string;
  const deployer = await signer.getAddress();
  if (isDevEnv) {
    multisig = deployer;
  } else {
    if (!isAddress(MULTISIG_WALLET)) {
      throw Error("You should setup multi sig wallet");
    }
    multisig = MULTISIG_WALLET;
  }
  const populated = await timelock.populateTransaction.revokeRole(
    getRoleHash("EXECUTOR_ROLE"),
    multisig
  );
  const delay = 3600 * 24 * 7 * 4; // about 4 weeks
  const target = populated.to;
  if (!target) throw Error("populated tx does not have the to value");
  await timelock.forceSchedule(
    target,
    populated.value || 0,
    populated.data,
    constants.HashZero, // predecessor
    constants.HashZero, // salt
    delay
  );
}
