// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { WETH } from "./utils/deployer";
import {
  COMMIT,
  COMMIT__factory,
  DividendPool,
  DividendPool__factory,
  ERC20,
  ERC20__factory,
  IERC20,
  IERC20__factory,
  JobBoard,
  JobBoard__factory,
  Marketplace,
  Marketplace__factory,
  RIGHT,
  RIGHT__factory,
  VoteCounter,
  VoteCounter__factory,
  StableReserve,
  StableReserve__factory,
  FounderShare,
  FounderShare__factory,
  ERC20BurnMiningV1,
  ERC20BurnMiningV1__factory,
  ERC20BurnMiningV1Factory,
  ERC20BurnMiningV1Factory__factory,
  ERC20StakeMiningV1,
  ERC20StakeMiningV1__factory,
  ERC20StakeMiningV1Factory,
  ERC20StakeMiningV1Factory__factory,
  ERC721StakeMiningV1,
  ERC721StakeMiningV1__factory,
  ERC721StakeMiningV1Factory,
  ERC721StakeMiningV1Factory__factory,
  ERC1155StakeMiningV1,
  ERC1155StakeMiningV1__factory,
  ERC1155StakeMiningV1Factory,
  ERC1155StakeMiningV1Factory__factory,
  TimelockedGovernance,
  TimelockedGovernance__factory,
  VISION,
  VisionEmitter,
  VisionEmitter__factory,
  VISION__factory,
  VotingEscrowLock,
  VotingEscrowLock__factory,
  WorkersUnion,
  WorkersUnion__factory,
  Workhard__factory,
  Workhard,
  WorkhardClient,
} from "../src";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { constants, Contract } from "ethers";
import { parseEther } from "ethers/lib/utils";

export interface HelperFixture {
  baseCurrency: ERC20;
  multisig: SignerWithAddress;
}

export interface CommonsFixture extends HelperFixture {
  pool2Factory: Contract;
  weth: Contract;
  erc20BurnMiningV1Factory: ERC20BurnMiningV1Factory;
  erc20StakeMiningV1Factory: ERC20StakeMiningV1Factory;
  erc721StakeMiningV1Factory: ERC721StakeMiningV1Factory;
  erc1155StakeMiningV1Factory: ERC1155StakeMiningV1Factory;
}

export interface WorkhardDAOFixture extends CommonsFixture {
  vision: VISION;
  commit: COMMIT;
  right: RIGHT;
  votingEscrow: VotingEscrowLock;
  founderShare: FounderShare;
  timelock: TimelockedGovernance;
  dividendPool: DividendPool;
  stableReserve: StableReserve;
  jobBoard: JobBoard;
  marketplace: Marketplace;
  voteCounter: VoteCounter;
  workersUnion: WorkersUnion;
  visionEmitter: VisionEmitter;
  workhard: Workhard;
}

export async function getHelperFixture(): Promise<HelperFixture> {
  const [deployer] = await ethers.getSigners();
  // 1. Get base currency. (In mainnet use DAI & for testing deploy new)
  const baseCurrency = ERC20__factory.connect(
    (
      await (
        await ethers.getContractFactory("contracts/utils/ERC20Mock.sol:ERC20")
      ).deploy()
    ).address,
    deployer
  );
  return {
    baseCurrency,
    multisig: deployer,
  };
}

export async function getCommonFixture(): Promise<CommonsFixture> {
  const [deployer] = await ethers.getSigners();
  const helperFixture: HelperFixture = await getHelperFixture();

  const UniswapV2Factory = await ethers.getContractFactory("UniswapV2Factory");
  const pool2Factory = await UniswapV2Factory.deploy(deployer.address);

  const WETH9Factory = await ethers.getContractFactory("WETH9");
  const weth = await WETH9Factory.deploy();

  // 14. Deploy ERC20BurnMiningV1Factory
  const erc20BurnMiningV1Factory = ERC20BurnMiningV1Factory__factory.connect(
    (
      await (
        await ethers.getContractFactory("ERC20BurnMiningV1Factory")
      ).deploy()
    ).address,
    deployer
  );
  // 15. Deploy ERC20StakeMiningV1Factory
  const erc20StakeMiningV1Factory = ERC20StakeMiningV1Factory__factory.connect(
    (
      await (
        await ethers.getContractFactory("ERC20StakeMiningV1Factory")
      ).deploy()
    ).address,
    deployer
  );
  // 16. Deploy ERC721StakeMiningV1Factory
  const erc721StakeMiningV1Factory =
    ERC721StakeMiningV1Factory__factory.connect(
      (
        await (
          await ethers.getContractFactory("ERC721StakeMiningV1Factory")
        ).deploy()
      ).address,
      deployer
    );
  // 17. Deploy ERC1155StakeMiningV1Factory
  const erc1155StakeMiningV1Factory =
    ERC1155StakeMiningV1Factory__factory.connect(
      (
        await (
          await ethers.getContractFactory("ERC1155StakeMiningV1Factory")
        ).deploy()
      ).address,
      deployer
    );
  return {
    ...helperFixture,
    pool2Factory,
    weth,
    erc20BurnMiningV1Factory,
    erc20StakeMiningV1Factory,
    erc721StakeMiningV1Factory,
    erc1155StakeMiningV1Factory,
  };
}

export async function getWorkhard(): Promise<WorkhardClient> {
  const commonsFixture = await getCommonFixture();
  const [deployer] = await ethers.getSigners();

  const vision = VISION__factory.connect(
    (await (await ethers.getContractFactory("VISION")).deploy()).address,
    deployer
  );

  const commit = COMMIT__factory.connect(
    (await (await ethers.getContractFactory("COMMIT")).deploy()).address,
    deployer
  );
  const right = RIGHT__factory.connect(
    (await (await ethers.getContractFactory("RIGHT")).deploy()).address,
    deployer
  );
  const votingEscrow = VotingEscrowLock__factory.connect(
    (await (await ethers.getContractFactory("VotingEscrowLock")).deploy())
      .address,
    deployer
  );
  const founderShare = FounderShare__factory.connect(
    (await (await ethers.getContractFactory("FounderShare")).deploy()).address,
    deployer
  );
  const timelock = TimelockedGovernance__factory.connect(
    (await (await ethers.getContractFactory("TimelockedGovernance")).deploy())
      .address,
    deployer
  );
  const dividendPool = DividendPool__factory.connect(
    (await (await ethers.getContractFactory("DividendPool")).deploy()).address,
    deployer
  );
  const stableReserve = StableReserve__factory.connect(
    (await (await ethers.getContractFactory("StableReserve")).deploy()).address,
    deployer
  );
  const jobBoard = JobBoard__factory.connect(
    (await (await ethers.getContractFactory("JobBoard")).deploy()).address,
    deployer
  );
  const marketplace = Marketplace__factory.connect(
    (await (await ethers.getContractFactory("Marketplace")).deploy()).address,
    deployer
  );
  const voteCounter = VoteCounter__factory.connect(
    (await (await ethers.getContractFactory("VoteCounter")).deploy()).address,
    deployer
  );
  const workersUnion = WorkersUnion__factory.connect(
    (await (await ethers.getContractFactory("WorkersUnion")).deploy()).address,
    deployer
  );
  const visionEmitter = VisionEmitter__factory.connect(
    (await (await ethers.getContractFactory("VisionEmitter")).deploy()).address,
    deployer
  );
  const workhard = Workhard__factory.connect(
    (
      await (
        await ethers.getContractFactory("Workhard")
      ).deploy(
        {
          multisig: commonsFixture.multisig.address,
          baseCurrency: commonsFixture.baseCurrency.address,
          timelock: timelock.address,
          vision: vision.address,
          commit: commit.address,
          right: right.address,
          founderShare: founderShare.address,
          stableReserve: stableReserve.address,
          jobBoard: jobBoard.address,
          marketplace: marketplace.address,
          dividendPool: dividendPool.address,
          voteCounter: voteCounter.address,
          workersUnion: workersUnion.address,
          visionEmitter: visionEmitter.address,
          votingEscrow: votingEscrow.address,
        },
        {
          pool2Factory: commonsFixture.pool2Factory.address,
          weth: commonsFixture.weth.address,
          erc20StakeMiningV1Factory:
            commonsFixture.erc20StakeMiningV1Factory.address,
          erc20BurnMiningV1Factory:
            commonsFixture.erc20BurnMiningV1Factory.address,
          erc721StakeMiningV1Factory:
            commonsFixture.erc721StakeMiningV1Factory.address,
          erc1155StakeMiningV1Factory:
            commonsFixture.erc1155StakeMiningV1Factory.address,
        }
      )
    ).address,
    deployer
  );
  await workhard.upgradeToDAO(0, {
    multisig: commonsFixture.multisig.address,
    baseCurrency: commonsFixture.baseCurrency.address,
    projectName: "Workhard Master Dev",
    projectSymbol: "WMD",
    visionName: "The Master Vision",
    visionSymbol: "VISION",
    commitName: "Work Hard Commit",
    commitSymbol: "COMMIT",
    rightName: "Work Hard Right",
    rightSymbol: "RIGHT",
    minDelay: 86400,
    launchDelay: 2419200,
    initialEmission: parseEther("24000000"),
    minEmissionRatePerWeek: 60,
    emissionCutRate: 3000,
    founderShare: 500,
  });
  await workhard.launch(0, 4750, 4750, 499, 1);
  const client = await WorkhardClient.from(ethers.provider, workhard.address);
  return client;
}

export interface WorkhardFixture extends WorkhardDAOFixture {
  visionLP: IERC20;
  commitMining: ERC20BurnMiningV1;
  liquidityMining: ERC20StakeMiningV1;
  founderSharePool: ERC20BurnMiningV1;
}

// export async function getWorkhardFixture(option?: {
//   skipMinterSetting?: boolean;
// }): Promise<WorkhardFixture> {
//   const fixture = await getWorkhard(option);
//   const [deployer] = await ethers.getSigners();
//   // 5. Deploy uniswap pair
//   await fixture.pool2Factory.createPair(fixture.vision.address, WETH);
//   const lpAddress = await fixture.pool2Factory.getPair(
//     fixture.vision.address,
//     WETH
//   );
//   const visionLP = IERC20__factory.connect(lpAddress, deployer);

//   const commitMiningaddr = await fixture.erc20BurnMiningV1Factory.getPool(
//     fixture.visionEmitter.address,
//     fixture.commit.address
//   );
//   const commitMining = ERC20BurnMiningV1__factory.connect(
//     commitMiningaddr,
//     deployer
//   );
//   const founderSharePoolAddr = await fixture.erc20BurnMiningV1Factory.getPool(
//     fixture.visionEmitter.address,
//     fixture.founderShare.address
//   );
//   const founderSharePool = ERC20BurnMiningV1__factory.connect(
//     founderSharePoolAddr,
//     deployer
//   );
//   const liquidityMiningAddr = await fixture.erc20StakeMiningV1Factory.getPool(
//     fixture.visionEmitter.address,
//     visionLP.address
//   );
//   const liquidityMining = ERC20StakeMiningV1__factory.connect(
//     liquidityMiningAddr,
//     deployer
//   );

//   return {
//     ...fixture,
//     visionLP,
//     commitMining,
//     liquidityMining,
//     founderSharePool,
//   };
// }
