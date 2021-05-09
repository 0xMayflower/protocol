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
    _dividendPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Distributor> {
    return super.deploy(_dividendPool, overrides || {}) as Promise<Distributor>;
  }
  getDeployTransaction(
    _dividendPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_dividendPool, overrides || {});
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
    inputs: [
      {
        internalType: "address",
        name: "_dividendPool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
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
  "0x60a060405234801561001057600080fd5b5060405161011a38038061011a8339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b031660b661006460003980605e525060b66000f3fe6080604052348015600f57600080fd5b506004361060285760003560e01c806330d172d514602d575b600080fd5b6033605c565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b7f00000000000000000000000000000000000000000000000000000000000000008156fea264697066735822122092f38c367d75ee734cd8ce51ce2b3ffb2a952d72d0639d8ce102c71916e8594f64736f6c63430007060033";