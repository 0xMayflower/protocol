/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { SquareRootVoteCounter } from "../SquareRootVoteCounter";

export class SquareRootVoteCounter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _dividendPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<SquareRootVoteCounter> {
    return super.deploy(
      _dividendPool,
      overrides || {}
    ) as Promise<SquareRootVoteCounter>;
  }
  getDeployTransaction(
    _dividendPool: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(_dividendPool, overrides || {});
  }
  attach(address: string): SquareRootVoteCounter {
    return super.attach(address) as SquareRootVoteCounter;
  }
  connect(signer: Signer): SquareRootVoteCounter__factory {
    return super.connect(signer) as SquareRootVoteCounter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SquareRootVoteCounter {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as SquareRootVoteCounter;
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
  {
    inputs: [
      {
        internalType: "address",
        name: "voter",
        type: "address",
      },
    ],
    name: "getVotes",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x60a060405234801561001057600080fd5b506040516103413803806103418339818101604052602081101561003357600080fd5b5051606081901b6001600160601b0319166080526001600160a01b03166102d261006f6000398060b3528060da52806101c152506102d26000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c806330d172d51461003b5780639ab24eb01461006c575b600080fd5b6100436100b1565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b61009f6004803603602081101561008257600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166100d5565b60408051918252519081900360200190f35b7f000000000000000000000000000000000000000000000000000000000000000081565b6000807f000000000000000000000000000000000000000000000000000000000000000073ffffffffffffffffffffffffffffffffffffffff1663b97dd9e26040518163ffffffff1660e01b815260040160206040518083038186803b15801561013e57600080fd5b505afa158015610152573d6000803e3d6000fd5b505050506040513d602081101561016857600080fd5b5051604080517f8e3d1b6600000000000000000000000000000000000000000000000000000000815273ffffffffffffffffffffffffffffffffffffffff868116600483015260018401602483015291519293506000927f000000000000000000000000000000000000000000000000000000000000000090921691638e3d1b6691604480820192602092909190829003018186803b15801561020a57600080fd5b505afa15801561021e573d6000803e3d6000fd5b505050506040513d602081101561023457600080fd5b505190506102418161024b565b925050505b919050565b6000600382111561028e575080600160028204015b818110156102885780915060028182858161027757fe5b04018161028057fe5b049050610260565b50610246565b81156102465750600191905056fea26469706673582212206dc4ecbfcca545ad41321b17ff9a68b3abf1314bd0c23c1382fa77907b6174d564736f6c63430007060033";
