/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer } from "ethers";
import { Provider } from "@ethersproject/providers";

import type { GrantReceiver } from "../GrantReceiver";

export class GrantReceiver__factory {
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): GrantReceiver {
    return new Contract(address, _abi, signerOrProvider) as GrantReceiver;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "currency",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "data",
        type: "bytes",
      },
    ],
    name: "receiveGrant",
    outputs: [
      {
        internalType: "bool",
        name: "result",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];
