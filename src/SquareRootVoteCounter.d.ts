/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  Contract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import { TypedEventFilter, TypedEvent, TypedListener } from "./commons";

interface SquareRootVoteCounterInterface extends ethers.utils.Interface {
  functions: {
    "getTotalVotes()": FunctionFragment;
    "getVotes(uint256,uint256)": FunctionFragment;
    "initialize(address)": FunctionFragment;
    "voterOf(uint256)": FunctionFragment;
    "votingRights(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getTotalVotes",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getVotes",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "initialize", values: [string]): string;
  encodeFunctionData(
    functionFragment: "voterOf",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "votingRights",
    values: [string]
  ): string;

  decodeFunctionResult(
    functionFragment: "getTotalVotes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getVotes", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "initialize", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "voterOf", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "votingRights",
    data: BytesLike
  ): Result;

  events: {};
}

export class SquareRootVoteCounter extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: SquareRootVoteCounterInterface;

  functions: {
    getTotalVotes(overrides?: CallOverrides): Promise<[BigNumber]>;

    "getTotalVotes()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    getVotes(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    "getVotes(uint256,uint256)"(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    initialize(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    "initialize(address)"(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    voterOf(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    "voterOf(uint256)"(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[string]>;

    votingRights(
      voter: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { rights: BigNumber[] }>;

    "votingRights(address)"(
      voter: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber[]] & { rights: BigNumber[] }>;
  };

  getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

  "getTotalVotes()"(overrides?: CallOverrides): Promise<BigNumber>;

  getVotes(
    veLockId: BigNumberish,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  "getVotes(uint256,uint256)"(
    veLockId: BigNumberish,
    timestamp: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  initialize(
    _veToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  "initialize(address)"(
    _veToken: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  voterOf(veLockId: BigNumberish, overrides?: CallOverrides): Promise<string>;

  "voterOf(uint256)"(
    veLockId: BigNumberish,
    overrides?: CallOverrides
  ): Promise<string>;

  votingRights(voter: string, overrides?: CallOverrides): Promise<BigNumber[]>;

  "votingRights(address)"(
    voter: string,
    overrides?: CallOverrides
  ): Promise<BigNumber[]>;

  callStatic: {
    getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalVotes()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVotes(uint256,uint256)"(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(_veToken: string, overrides?: CallOverrides): Promise<void>;

    "initialize(address)"(
      _veToken: string,
      overrides?: CallOverrides
    ): Promise<void>;

    voterOf(veLockId: BigNumberish, overrides?: CallOverrides): Promise<string>;

    "voterOf(uint256)"(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<string>;

    votingRights(
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;

    "votingRights(address)"(
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber[]>;
  };

  filters: {};

  estimateGas: {
    getTotalVotes(overrides?: CallOverrides): Promise<BigNumber>;

    "getTotalVotes()"(overrides?: CallOverrides): Promise<BigNumber>;

    getVotes(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getVotes(uint256,uint256)"(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    initialize(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    "initialize(address)"(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    voterOf(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "voterOf(uint256)"(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    votingRights(voter: string, overrides?: CallOverrides): Promise<BigNumber>;

    "votingRights(address)"(
      voter: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTotalVotes(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "getTotalVotes()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getVotes(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getVotes(uint256,uint256)"(
      veLockId: BigNumberish,
      timestamp: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    initialize(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    "initialize(address)"(
      _veToken: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    voterOf(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "voterOf(uint256)"(
      veLockId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    votingRights(
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "votingRights(address)"(
      voter: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
