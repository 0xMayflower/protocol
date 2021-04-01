/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Governed } from "../Governed";

export class Governed__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Governed> {
    return super.deploy(overrides || {}) as Promise<Governed>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): Governed {
    return super.attach(address) as Governed;
  }
  connect(signer: Signer): Governed__factory {
    return super.connect(signer) as Governed__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Governed {
    return new Contract(address, _abi, signerOrProvider) as Governed;
  }
}

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Anarchized",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_prevGovernance",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "_newGovernance",
        type: "address",
      },
    ],
    name: "NewGovernance",
    type: "event",
  },
  {
    inputs: [],
    name: "anarchize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "anarchizedAt",
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
  {
    inputs: [],
    name: "forceAnarchize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "forceAnarchizeAt",
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
  {
    inputs: [],
    name: "gov",
    outputs: [
      {
        internalType: "address",
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
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "setAnarchyPoint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
    ],
    name: "setGovernance",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040526000600155600060025534801561001a57600080fd5b50600080546001600160a01b031916331790556104e18061003c6000396000f3fe608060405234801561001057600080fd5b506004361061007d5760003560e01c806366bfc1581161005b57806366bfc158146100b85780639c724e24146100d2578063ab033ea9146100da578063de19d079146101005761007d565b806312d43a51146100825780631b343adc146100a6578063605cfbb5146100b0575b600080fd5b61008a61011d565b604080516001600160a01b039092168252519081900360200190f35b6100ae61012c565b005b6100ae610186565b6100c0610231565b60408051918252519081900360200190f35b6100c0610237565b6100ae600480360360208110156100f057600080fd5b50356001600160a01b031661023d565b6100ae6004803603602081101561011657600080fd5b50356102f4565b6000546001600160a01b031681565b6000546001600160a01b0316331461017c576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6101846103dd565b565b6002546101da576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b60025442101561017c576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b60015481565b60025481565b6000546001600160a01b0316331461028d576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6001600160a01b0381166102e8576040805162461bcd60e51b815260206004820152601860248201527f55736520616e61726368697a65282920696e73746561642e0000000000000000604482015290519081900360640190fd5b6102f181610416565b50565b6000546001600160a01b03163314610344576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60025415610399576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207570646174652e000000000000000000000000000000000000604482015290519081900360640190fd5b428110156103d85760405162461bcd60e51b815260040180806020018281038252602281526020018061048a6022913960400191505060405180910390fd5b600255565b6103e76000610416565b426001556040517fbf30e910dd2b6e24c75c800d9f3477674e89a4b45e366f87cd03c99e0ba6496190600090a1565b600080546040516001600160a01b03808516939216917f48da34dfe9ebb4198c3f70d8382467788dcee33984c79a74fa850772c4e5e36f91a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b039290921691909117905556fe54696d65706f696e742073686f756c6420626520696e20746865206675747572652ea264697066735822122004c0007a6d257cc9125c1371e952013a06e759a46e079ccd4aa09b61e2acc2e164736f6c63430007060033";