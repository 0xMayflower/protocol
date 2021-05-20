/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VoteCounter } from "../VoteCounter";

export class VoteCounter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VoteCounter> {
    return super.deploy(overrides || {}) as Promise<VoteCounter>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): VoteCounter {
    return super.attach(address) as VoteCounter;
  }
  connect(signer: Signer): VoteCounter__factory {
    return super.connect(signer) as VoteCounter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VoteCounter {
    return new Contract(address, _abi, signerOrProvider) as VoteCounter;
  }
}

const _abi = [
  {
    inputs: [],
    name: "getTotalVotes",
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
    inputs: [
      {
        internalType: "uint256",
        name: "veLockId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "_veToken",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "veLockId",
        type: "uint256",
      },
    ],
    name: "voterOf",
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
        name: "voter",
        type: "address",
      },
    ],
    name: "votingRights",
    outputs: [
      {
        internalType: "uint256[]",
        name: "rights",
        type: "uint256[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061070c806100206000396000f3fe608060405234801561001057600080fd5b50600436106100675760003560e01c80639a0e7d66116100505780639a0e7d66146100da578063a8fef100146100e2578063c4d66de81461015857610067565b80631fb05fca1461006c57806391f36633146100a5575b600080fd5b6100896004803603602081101561008257600080fd5b5035610180565b604080516001600160a01b039092168252519081900360200190f35b6100c8600480360360408110156100bb57600080fd5b508035906020013561020c565b60408051918252519081900360200190f35b6100c86102ab565b610108600480360360208110156100f857600080fd5b50356001600160a01b031661033a565b60408051602080825283518183015283519192839290830191858101910280838360005b8381101561014457818101518382015260200161012c565b505050509050019250505060405180910390f35b61017e6004803603602081101561016e57600080fd5b50356001600160a01b03166104e5565b005b60008060029054906101000a90046001600160a01b03166001600160a01b0316634864025e836040518263ffffffff1660e01b81526004018082815260200191505060206040518083038186803b1580156101da57600080fd5b505afa1580156101ee573d6000803e3d6000fd5b505050506040513d602081101561020457600080fd5b505192915050565b600154604080517f642cf649000000000000000000000000000000000000000000000000000000008152600481018590526024810184905290516000926001600160a01b03169163642cf649916044808301926020929190829003018186803b15801561027857600080fd5b505afa15801561028c573d6000803e3d6000fd5b505050506040513d60208110156102a257600080fd5b50519392505050565b600154604080517f18160ddd00000000000000000000000000000000000000000000000000000000815290516000926001600160a01b0316916318160ddd916004808301926020929190829003018186803b15801561030957600080fd5b505afa15801561031d573d6000803e3d6000fd5b505050506040513d602081101561033357600080fd5b5051905090565b606060008060029054906101000a90046001600160a01b03166001600160a01b0316634bb5c414846040518263ffffffff1660e01b815260040180826001600160a01b0316815260200191505060206040518083038186803b15801561039f57600080fd5b505afa1580156103b3573d6000803e3d6000fd5b505050506040513d60208110156103c957600080fd5b505190508067ffffffffffffffff811180156103e457600080fd5b5060405190808252806020026020018201604052801561040e578160200160208202803683370190505b50915060005b82518110156104de57600054604080517f5fb6073a0000000000000000000000000000000000000000000000000000000081526001600160a01b0387811660048301526024820185905291516201000090930490911691635fb6073a91604480820192602092909190829003018186803b15801561049157600080fd5b505afa1580156104a5573d6000803e3d6000fd5b505050506040513d60208110156104bb57600080fd5b505183518490839081106104cb57fe5b6020908102919091010152600101610414565b5050919050565b600054610100900460ff16806104fe57506104fe610691565b8061050c575060005460ff16155b610561576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602e8152602001806106a9602e913960400191505060405180910390fd5b600054610100900460ff1615801561058c576000805460ff1961ff0019909116610100171660011790555b600180547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b038416908117909155604080517f14f57a4b00000000000000000000000000000000000000000000000000000000815290516314f57a4b91600480820192602092909190829003018186803b15801561061157600080fd5b505afa158015610625573d6000803e3d6000fd5b505050506040513d602081101561063b57600080fd5b5051600080546001600160a01b0390921662010000027fffffffffffffffffffff0000000000000000000000000000000000000000ffff909216919091179055801561068d576000805461ff00191690555b5050565b600061069c306106a2565b15905090565b3b15159056fe496e697469616c697a61626c653a20636f6e747261637420697320616c726561647920696e697469616c697a6564a26469706673582212200875c4caf23ec69e09906b1e7d058411b6a045a1fbe3761e10111c98d246801164736f6c63430007060033";
