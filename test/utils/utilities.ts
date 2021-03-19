import { Contract, PopulatedTransaction } from "ethers";
import { ethers } from "hardhat";

const { keccak256, solidityPack, getAddress } = ethers.utils;

export const goToNextWeek = async () => {
  await ethers.provider.send("evm_setNextBlockTimestamp", [
    (await ethers.provider.getBlock("latest")).timestamp + 604800,
  ]);
};

export const goTo = async (seconds: number) => {
  await ethers.provider.send("evm_setNextBlockTimestamp", [
    (await ethers.provider.getBlock("latest")).timestamp + seconds,
  ]);
};

export const runTimelockTx = async (
  timelock: Contract,
  tx: Promise<PopulatedTransaction>,
  delay?: number
) => {
  const _delay = delay || 86400;
  const populated = await tx;
  const target = populated.to;
  if (!target) throw Error("populated tx doesn not have the to value");
  const txParams = [
    target,
    populated.value || 0,
    populated.data,
    ethers.constants.HashZero, // predecessor
    ethers.constants.HashZero, // salt
  ];
  await timelock.schedule(...txParams, _delay);
  await ethers.provider.send("evm_setNextBlockTimestamp", [
    (await ethers.provider.getBlock("latest")).timestamp + _delay + 1,
  ]);
  await timelock.execute(...txParams);
};

export const getCreate2Address = (
  factoryAddress: string,
  [token, emitter, baseToken]: [string, string, string],
  bytecode: string
): string => {
  const create2Inputs = [
    "0xff",
    factoryAddress,
    keccak256(
      solidityPack(
        ["address", "address", "address"],
        [token, emitter, baseToken]
      )
    ),
    keccak256(bytecode),
  ];
  const sanitizedInputs = `0x${create2Inputs.map((i) => i.slice(2)).join("")}`;
  return getAddress(`0x${keccak256(sanitizedInputs).slice(-40)}`);
};
