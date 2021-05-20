/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Distributor } from "../Distributor";

export class Distributor__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Distributor> {
    return super.deploy(overrides || {}) as Promise<Distributor>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Distributor {
    return super.attach(address) as Distributor;
  }
  connect(signer: Signer): Distributor__factory {
    return super.connect(signer) as Distributor__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Distributor {
    return new Contract(address, _abi, signerOrProvider) as Distributor;
  }
}

const _abi = [
  {
    inputs: [],
    name: "dividendPool",
    outputs: [
      {
        internalType: "contract IDividendPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x6080604052348015600f57600080fd5b5060ae8061001e6000396000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806330d172d514602d575b600080fd5b6033605c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b60005473ffffffffffffffffffffffffffffffffffffffff168156fea2646970667358221220380a1931fed013f498a86006bbc6d72ca70e1a3a93bb907b164d0dde4c62e37464736f6c63430007060033";
