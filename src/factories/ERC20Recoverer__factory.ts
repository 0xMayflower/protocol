/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20Recoverer } from "../ERC20Recoverer";

export class ERC20Recoverer__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20Recoverer> {
    return super.deploy(overrides || {}) as Promise<ERC20Recoverer>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20Recoverer {
    return super.attach(address) as ERC20Recoverer;
  }
  connect(signer: Signer): ERC20Recoverer__factory {
    return super.connect(signer) as ERC20Recoverer__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20Recoverer {
    return new Contract(address, _abi, signerOrProvider) as ERC20Recoverer;
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
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Recovered",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "disable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "disablePermanently",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_contract",
        type: "address",
      },
    ],
    name: "enable",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "nonRecoverable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "permanentlyNonRecoverable",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenAmount",
        type: "uint256",
      },
    ],
    name: "recoverERC20",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "recoverer",
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
        internalType: "address",
        name: "_recoverer",
        type: "address",
      },
    ],
    name: "setRecoverer",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600280546001600160a01b03191633179055610903806100326000396000f3fe608060405234801561001057600080fd5b50600436106100885760003560e01c8063cacc4b021161005b578063cacc4b021461013f578063e6c09edf14610165578063ed63058d1461018b578063fabed4d61461008d57610088565b80635bfa1b681461008d5780638980f11f146100b55780638fa0f3b3146100e1578063b808dce81461011b575b600080fd5b6100b3600480360360208110156100a357600080fd5b50356001600160a01b03166101b1565b005b6100b3600480360360408110156100cb57600080fd5b506001600160a01b038135169060200135610234565b610107600480360360208110156100f757600080fd5b50356001600160a01b03166103d1565b604080519115158252519081900360200190f35b6101236103e6565b604080516001600160a01b039092168252519081900360200190f35b6101076004803603602081101561015557600080fd5b50356001600160a01b03166103f5565b6100b36004803603602081101561017b57600080fd5b50356001600160a01b031661040a565b6100b3600480360360208110156101a157600080fd5b50356001600160a01b0316610490565b6002546001600160a01b03163314610210576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b6002546001600160a01b03163314610293576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526001602052604090205460ff1615610301576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526020819052604090205460ff161561036f576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b600254610389906001600160a01b03848116911683610529565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60016020526000908152604090205460ff1681565b6002546001600160a01b031681565b60006020819052908152604090205460ff1681565b6002546001600160a01b03163314610469576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b6002546001600160a01b031633146104ef576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b600280547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b0392909216919091179055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb000000000000000000000000000000000000000000000000000000001790526105a99084906105ae565b505050565b6000610603826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661065f9092919063ffffffff16565b8051909150156105a95780806020019051602081101561062257600080fd5b50516105a95760405162461bcd60e51b815260040180806020018281038252602a8152602001806108a4602a913960400191505060405180910390fd5b606061066e8484600085610678565b90505b9392505050565b6060824710156106b95760405162461bcd60e51b815260040180806020018281038252602681526020018061087e6026913960400191505060405180910390fd5b6106c2856107d3565b610713576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106107515780518252601f199092019160209182019101610732565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d80600081146107b3576040519150601f19603f3d011682016040523d82523d6000602084013e6107b8565b606091505b50915091506107c88282866107d9565b979650505050505050565b3b151590565b606083156107e8575081610671565b8251156107f85782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561084257818101518382015260200161082a565b50505050905090810190601f16801561086f5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c5361666545524332303a204552433230206f7065726174696f6e20646964206e6f742073756363656564a264697066735822122087d0e3564c7c1e7b4d01cd3afe8488ad7d4c09bf2ae0d32640930e6c9756228964736f6c63430007060033";
