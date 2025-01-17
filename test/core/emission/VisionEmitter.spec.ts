import { ethers } from "hardhat";
import chai, { expect } from "chai";
import { solidity } from "ethereum-waffle";
import { constants, BigNumber } from "ethers";
import { formatEther, formatUnits, parseEther } from "ethers/lib/utils";
import { goTo, goToNextWeek } from "../../utils/utilities";
import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import {
  ERC20BurnMiningV1,
  ERC20BurnMiningV1__factory,
  ERC20StakeMiningV1,
  ERC20StakeMiningV1__factory,
  TimelockedGovernance,
  VISION,
  VisionEmitter,
  WorkhardDAO,
  WorkhardClient,
  ERC20__factory,
  ERC20,
  IUniswapV2Pair,
} from "../../../src";
import { getWorkhard } from "../../../scripts/fixtures";

chai.use(solidity);

describe("VisionEmitter.sol", function () {
  let signers: SignerWithAddress[];
  let deployer: SignerWithAddress;
  let dev: SignerWithAddress;
  let alice: SignerWithAddress;
  let bob: SignerWithAddress;
  let workhard: WorkhardClient;
  let masterDAO: WorkhardDAO;
  let vision: VISION;
  let visionLP: IUniswapV2Pair;
  let visionEmitter: VisionEmitter;
  let commitMining: ERC20BurnMiningV1;
  let liquidityMining: ERC20StakeMiningV1;
  let timelock: TimelockedGovernance;
  const INITIAL_EMISSION_AMOUNT: BigNumber = parseEther("24000000");
  let updatedEmission;

  before(async () => {
    signers = await ethers.getSigners();
    deployer = signers[0];
    dev = signers[1];
    alice = signers[2];
    bob = signers[3];
    workhard = await getWorkhard();
    masterDAO = await workhard.getMasterDAO({ account: deployer });
    vision = masterDAO.vision;
    visionEmitter = masterDAO.visionEmitter;
    timelock = masterDAO.timelock;
    const periphery = await workhard.getPeriphery(0);
    commitMining = periphery.commitMining;
    liquidityMining = periphery.liquidityMining;
    visionLP = periphery.visionLP;
    updatedEmission = {
      pools: [
        {
          weight: 4745,
          poolType: await workhard.commons.erc20BurnMiningV1Factory.poolType(),
          baseToken: masterDAO.commit.address,
        },
        {
          weight: 4745,
          poolType: await workhard.commons.erc20StakeMiningV1Factory.poolType(),
          baseToken: visionLP.address,
        },
      ],
      treasuryWeight: 500,
      callerWeight: 1,
    };
  });
  let snapshot: string;
  beforeEach(async () => {
    snapshot = await ethers.provider.send("evm_snapshot", []);
  });
  afterEach(async () => {
    await ethers.provider.send("evm_revert", [snapshot]);
  });
  it("VisionEmitter should be governed by the timelock contract at first", async function () {
    expect(await visionEmitter.gov()).eq(timelock.address);
  });

  describe("setEmission", async () => {
    it("should revert tx from unauthenticated addresses", async () => {
      await expect(visionEmitter.setEmission(updatedEmission)).to.be.reverted;
    });
    it("should set the emission from the authenticated timelock contract", async () => {
      const tx = await visionEmitter.populateTransaction.setEmission(
        updatedEmission
      );
      const timelockTxParams = {
        target: visionEmitter.address, // target
        value: 0, // value
        data: tx.data, // msg.data
        predecessor: constants.HashZero, // predecessor
        salt: constants.HashZero, // salt
      };
      await timelock.schedule(
        timelockTxParams.target,
        timelockTxParams.value,
        timelockTxParams.data,
        timelockTxParams.predecessor,
        timelockTxParams.salt,
        86400
      );
      await expect(
        timelock.execute(
          timelockTxParams.target,
          timelockTxParams.value,
          timelockTxParams.data,
          timelockTxParams.predecessor,
          timelockTxParams.salt
        )
      ).to.be.reverted;
      await goTo(86401);
      await expect(
        timelock.execute(
          timelockTxParams.target,
          timelockTxParams.value,
          timelockTxParams.data,
          timelockTxParams.predecessor,
          timelockTxParams.salt
        )
      )
        .to.emit(visionEmitter, "EmissionWeightUpdated")
        .withArgs(2);

      expect(await visionEmitter.pools(0)).to.be.eq(commitMining.address);
      expect(await visionEmitter.pools(1)).to.be.eq(liquidityMining.address);
      expect(await visionEmitter.getPoolWeight(0)).to.be.eq(4745);
      expect(await visionEmitter.getPoolWeight(1)).to.be.eq(4745);
    });
  });
  describe("newPool", async () => {
    let testingStakeToken: ERC20;
    let testingBurnToken: ERC20;
    beforeEach(async () => {
      testingStakeToken = await new ERC20__factory(deployer).deploy();
      testingBurnToken = await new ERC20__factory(deployer).deploy();
    });
    it("newPool: ERC20BurnMiningV1", async () => {
      const expectedAddress =
        await workhard.commons.erc20BurnMiningV1Factory.poolAddress(
          visionEmitter.address,
          testingBurnToken.address
        );
      const erc20BurnMiningV1SigHash =
        await workhard.commons.erc20BurnMiningV1Factory.poolType();
      await expect(
        visionEmitter.newPool(
          erc20BurnMiningV1SigHash,
          testingBurnToken.address
        )
      )
        .to.emit(visionEmitter, "NewMiningPool")
        .withArgs(
          erc20BurnMiningV1SigHash,
          testingBurnToken.address,
          expectedAddress
        );
    });
    it("newPool: ERC20StakeMiningV1", async () => {
      const expectedAddress =
        await workhard.commons.erc20StakeMiningV1Factory.poolAddress(
          visionEmitter.address,
          testingStakeToken.address
        );
      const erc20StakeMiningV1SigHash =
        await workhard.commons.erc20StakeMiningV1Factory.poolType();
      await expect(
        visionEmitter.newPool(
          erc20StakeMiningV1SigHash,
          testingStakeToken.address
        )
      )
        .to.emit(visionEmitter, "NewMiningPool")
        .withArgs(
          erc20StakeMiningV1SigHash,
          testingStakeToken.address,
          expectedAddress
        );
    });
  });
  describe("distribute()", async () => {
    let testingStakeToken: ERC20;
    let testingBurnToken: ERC20;
    let testingERC20StakeMiningV1Pool: ERC20StakeMiningV1;
    let testingERC20BurnMiningV1Pool: ERC20BurnMiningV1;
    beforeEach(async () => {
      testingStakeToken = await new ERC20__factory(deployer).deploy();
      testingBurnToken = await new ERC20__factory(deployer).deploy();

      await visionEmitter.newPool(
        await workhard.commons.erc20BurnMiningV1Factory.poolType(),
        testingBurnToken.address
      );
      await visionEmitter.newPool(
        await workhard.commons.erc20StakeMiningV1Factory.poolType(),
        testingStakeToken.address
      );
      testingERC20BurnMiningV1Pool = ERC20BurnMiningV1__factory.connect(
        await workhard.commons.erc20BurnMiningV1Factory.poolAddress(
          visionEmitter.address,
          testingBurnToken.address
        ),
        deployer
      );
      testingERC20StakeMiningV1Pool = ERC20StakeMiningV1__factory.connect(
        await workhard.commons.erc20StakeMiningV1Factory.poolAddress(
          visionEmitter.address,
          testingStakeToken.address
        ),
        deployer
      );
    });
    it("distribute() should fail before the first week", async () => {
      await expect(visionEmitter.distribute()).to.be.reverted;
      await goToNextWeek();
      await expect(visionEmitter.distribute()).not.to.be.reverted;
    });
    describe("after start() executed", async () => {
      describe("distribute()", async () => {
        it("should fail when if the emission rate is not set properly", async () => {
          await expect(visionEmitter.distribute()).to.be.reverted;
        });
        it("should allocate rewards properly after 7 days", async () => {
          await goToNextWeek();
          await expect(visionEmitter.distribute())
            .to.emit(visionEmitter, "TokenEmission")
            .withArgs(INITIAL_EMISSION_AMOUNT);
          expect(await vision.totalSupply()).to.eq(INITIAL_EMISSION_AMOUNT);
        });
        const weeklyStat = [];
        weeklyStat.push({
          weekNum: 0,
          emission: INITIAL_EMISSION_AMOUNT,
          totalSupply: INITIAL_EMISSION_AMOUNT,
        });
        let totalSupply = INITIAL_EMISSION_AMOUNT;
        for (let weekNum = 1; weekNum < 52; weekNum++) {
          const cutEmission = Array(weekNum)
            .fill(0)
            .reduce((acc, _) => acc.mul(70).div(100), INITIAL_EMISSION_AMOUNT);
          const minimum = totalSupply.mul(60).div(10000);
          const emission = cutEmission.gt(minimum) ? cutEmission : minimum;
          totalSupply = totalSupply.add(emission);
          weeklyStat.push({
            weekNum,
            emission,
            totalSupply,
          });
        }
        const firstYearSupply = totalSupply;
        for (let weekNum = 0; weekNum < 52; weekNum++) {
          weeklyStat[weekNum].per = weeklyStat[weekNum].emission
            .mul(10000)
            .div(firstYearSupply);
        }
        for (let weekNum = 0; weekNum < 52; weekNum++) {
          const stat = weeklyStat[weekNum];
          const per = formatUnits(stat.per.toString(), 2);
          const emission = parseFloat(
            formatEther(stat.emission.toString())
          ).toFixed(2);
          const totalSupply = parseFloat(
            formatEther(stat.totalSupply.toString())
          ).toFixed(2);
          it.skip(`emission of week ${weekNum}(${per}% of the 1 year supply) should be ${emission} and total supply should be ${totalSupply}`, async () => {
            // await testingERC20StakeMiningV1Pool.connect(alice).stake();
            for (let w = 0; w < weekNum; w++) {
              await goToNextWeek();
              await visionEmitter.distribute();
            }
            await goToNextWeek();
            await expect(visionEmitter.distribute())
              .to.emit(visionEmitter, "TokenEmission")
              .withArgs(stat.emission);
            expect(await vision.totalSupply()).to.eq(stat.totalSupply);
          });
        }
      });
    });
  });
});
