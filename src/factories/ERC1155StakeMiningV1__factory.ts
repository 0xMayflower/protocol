/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC1155StakeMiningV1 } from "../ERC1155StakeMiningV1";

export class ERC1155StakeMiningV1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC1155StakeMiningV1> {
    return super.deploy(overrides || {}) as Promise<ERC1155StakeMiningV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC1155StakeMiningV1 {
    return super.attach(address) as ERC1155StakeMiningV1;
  }
  connect(signer: Signer): ERC1155StakeMiningV1__factory {
    return super.connect(signer) as ERC1155StakeMiningV1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC1155StakeMiningV1 {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as ERC1155StakeMiningV1;
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Allocated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numOfMiners",
        type: "uint256",
      },
    ],
    name: "Dispatched",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Mined",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Paused",
    type: "event",
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
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "Unpaused",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "numOfMiners",
        type: "uint256",
      },
    ],
    name: "Withdrawn",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "_mined",
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
        name: "amount",
        type: "uint256",
      },
    ],
    name: "allocate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "baseToken",
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
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "dispatchableMiners",
    outputs: [
      {
        internalType: "uint256",
        name: "numOfMiner",
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
        name: "",
        type: "address",
      },
    ],
    name: "dispatchedMiners",
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
    inputs: [],
    name: "erc1155StakeMiningV1",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "exit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "getMineableForPeriod",
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
        name: "_tokenEmitter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_baseToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recoverTo",
        type: "address",
      },
    ],
    name: "initialize",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "lastTimeMiningApplicable",
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
    name: "lastUpdateTime",
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
    name: "mine",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "mined",
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
    name: "miningEnds",
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
    name: "miningRate",
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
      {
        internalType: "uint256[]",
        name: "values",
        type: "uint256[]",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155BatchReceived",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "",
        type: "bytes",
      },
    ],
    name: "onERC1155Received",
    outputs: [
      {
        internalType: "bytes4",
        name: "",
        type: "bytes4",
      },
    ],
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
    name: "paidTokenPerMiner",
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
    name: "paused",
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
  {
    inputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "stake",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
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
    inputs: [],
    name: "token",
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
    inputs: [],
    name: "tokenEmitter",
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
    inputs: [],
    name: "tokenPerMiner",
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
    name: "totalMiners",
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
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "withdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006009556000600a553480156200001b57600080fd5b5060016000819055805460ff19169055600480546001600160a01b031916331790556200004f6301ffc9a760e01b620000e5565b620000616390ca796b60e01b620000e5565b62000073630271189760e51b620000e5565b620000856307b0472f60e41b620000e5565b620000976399f4b25160e01b620000e5565b620000a9630441a3e760e41b620000e5565b620000bb637f8661a160e01b620000e5565b620000cd63cfc5fe3960e01b620000e5565b620000df633173499d60e01b620000e5565b6200016a565b6001600160e01b0319808216141562000145576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600560205260409020805460ff19166001179055565b612022806200017a6000396000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c806389642c6b1161012a578063c55dae63116100bd578063e6c09edf1161008c578063f23a6e6111610071578063f23a6e61146106cf578063fabed4d614610363578063fc0c546a1461076457610226565b8063e6c09edf14610683578063ed63058d146106a957610226565b8063c55dae6314610630578063c8f33c9114610638578063cacc4b0214610640578063cfc5fe391461066657610226565b806399f4b251116100f957806399f4b25114610486578063b808dce81461048e578063bc197c8114610496578063c0c53b8b146105f857610226565b806389642c6b1461040f5780638980f11f146104175780638fa0f3b31461044357806390ca796b1461046957610226565b80634574f327116101bd5780635eb44e631161018c5780637b0472f0116101715780637b0472f0146103c75780637db4b8bc146103ea5780637f8661a1146103f257610226565b80635eb44e63146103b7578063764fe7d1146103bf57610226565b80634574f3271461033d5780635bfa1b68146103635780635c975abb146103895780635e4d58011461039157610226565b80633173499d116101f95780633173499d146102e457806332e830d5146102ec5780633d64baf1146102f4578063441a3e701461031857610226565b806301ffc9a71461022b5780631f402db41461027e578063221fef6a146102b65780632c3678cc146102dc575b600080fd5b61026a6004803603602081101561024157600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661076c565b604080519115158252519081900360200190f35b6102a46004803603602081101561029457600080fd5b50356001600160a01b03166107a3565b60408051918252519081900360200190f35b6102a4600480360360208110156102cc57600080fd5b50356001600160a01b03166107b5565b6102a46107c7565b61026a6107cd565b6102a46107d3565b6102fc6107e6565b604080516001600160a01b039092168252519081900360200190f35b61033b6004803603604081101561032e57600080fd5b50803590602001356107f5565b005b6102a46004803603602081101561035357600080fd5b50356001600160a01b0316610993565b61033b6004803603602081101561037957600080fd5b50356001600160a01b0316610a11565b61026a610a94565b6102a4600480360360208110156103a757600080fd5b50356001600160a01b0316610a9d565b6102a4610aaf565b6102a4610ab5565b61033b600480360360408110156103dd57600080fd5b5080359060200135610abb565b6102a4610baf565b61033b6004803603602081101561040857600080fd5b5035610c42565b6102a4610ced565b61033b6004803603604081101561042d57600080fd5b506001600160a01b038135169060200135610d35565b61026a6004803603602081101561045957600080fd5b50356001600160a01b0316610ed2565b61033b6004803603602081101561047f57600080fd5b5035610ee7565b61033b6111b1565b6102fc6111bb565b6105c3600480360360a08110156104ac57600080fd5b6001600160a01b0382358116926020810135909116918101906060810160408201356401000000008111156104e057600080fd5b8201836020820111156104f257600080fd5b8035906020019184602083028401116401000000008311171561051457600080fd5b91939092909160208101903564010000000081111561053257600080fd5b82018360208201111561054457600080fd5b8035906020019184602083028401116401000000008311171561056657600080fd5b91939092909160208101903564010000000081111561058457600080fd5b82018360208201111561059657600080fd5b803590602001918460018302840111640100000000831117156105b857600080fd5b5090925090506111ca565b604080517fffffffff000000000000000000000000000000000000000000000000000000009092168252519081900360200190f35b61033b6004803603606081101561060e57600080fd5b506001600160a01b038135811691602081013582169160409091013516611290565b6102fc61140f565b6102a461141e565b61026a6004803603602081101561065657600080fd5b50356001600160a01b0316611424565b6102a46004803603602081101561067c57600080fd5b5035611439565b61033b6004803603602081101561069957600080fd5b50356001600160a01b031661143f565b61033b600480360360208110156106bf57600080fd5b50356001600160a01b03166114c2565b6105c3600480360360a08110156106e557600080fd5b6001600160a01b03823581169260208101359091169160408201359160608101359181019060a08101608082013564010000000081111561072557600080fd5b82018360208201111561073757600080fd5b8035906020019184600183028401116401000000008311171561075957600080fd5b509092509050611550565b6102fc611588565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526005602052604090205460ff1690565b60106020526000908152604090205481565b600d6020526000908152604090205481565b600a5481565b60015b90565b60006107e142600954611597565b905090565b6008546001600160a01b031681565b33600090815260116020908152604080832085845290915290205481811015610865576040805162461bcd60e51b815260206004820152601460248201527f4e6f7468696e6720746f2077697468647261772e000000000000000000000000604482015290519081900360640190fd5b3360009081526011602090815260408083208684529091528120805484900390556108998261089386611439565b906115af565b90506108a481611608565b600654604051637921219560e11b815230600482018181523360248401819052604484018990526064840188905260a0608485019081526060805160a4870152805190966001600160a01b03169563f242432a95948c938c938a9360c4019060809080838360005b8381101561092457818101518382015260200161090c565b50505050905090810190601f1680156109515780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b15801561097457600080fd5b505af1158015610988573d6000803e3d6000fd5b505050505050505050565b6001600160a01b0381166000908152600e6020908152604080832054600d909252822054610a0b9190610a0590670de0b6b3a7640000906109ff906109e0906109da610ced565b90611791565b6001600160a01b038816600090815260106020526040902054906115af565b906117ee565b90611855565b92915050565b6004546001600160a01b03163314610a70576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60015460ff1690565b600e6020526000908152604090205481565b60095481565b600f5481565b600654604051637921219560e11b815233600482018181523060248401819052604484018790526064840186905260a0608485019081526060805160a4870152805190966001600160a01b03169563f242432a95948a938a938a9360c4019060809080838360005b83811015610b3b578181015183820152602001610b23565b50505050905090810190601f168015610b685780820380516001836020036101000a031916815260200191505b509650505050505050600060405180830381600087803b158015610b8b57600080fd5b505af1925050508015610b9c575060015b610baa57610baa83836118af565b505050565b600080600860009054906101000a90046001600160a01b03166001600160a01b031663a5fbe1b76040518163ffffffff1660e01b815260040160206040518083038186803b158015610c0057600080fd5b505afa158015610c14573d6000803e3d6000fd5b505050506040513d6020811015610c2a57600080fd5b5051600a54909150610c3c90826115af565b91505090565b610c4a6111b1565b600654604080517efdd58e000000000000000000000000000000000000000000000000000000008152336004820152602481018490529051610cea9284926001600160a01b039091169162fdd58e91604480820192602092909190829003018186803b158015610cb957600080fd5b505afa158015610ccd573d6000803e3d6000fd5b505050506040513d6020811015610ce357600080fd5b50516107f5565b50565b6000600f5460001415610d035750600c546107d0565b6107e1610d2c600f546109ff670de0b6b3a7640000610893600a54610893600b546109da6107d3565b600c5490611855565b6004546001600160a01b03163314610d94576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090205460ff1615610e02576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526002602052604090205460ff1615610e70576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b600454610e8a906001600160a01b038481169116836118e7565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60036020526000908152604090205460ff1681565b6008546001600160a01b03163314610f305760405162461bcd60e51b815260040180806020018281038252602d815260200180611fc0602d913960400191505060405180910390fd5b6000610f3a610ced565b600c55610f456107d3565b600b556001600160a01b03811615610f8c57610f6081610993565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b600854604080517fa5fbe1b700000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163a5fbe1b7916004808301926020929190829003018186803b158015610fea57600080fd5b505afa158015610ffe573d6000803e3d6000fd5b505050506040513d602081101561101457600080fd5b505160095490915042106110345761102c83826117ee565b600a55611073565b6009546000906110449042611791565b9050600061105d600a54836115af90919063ffffffff16565b905061106d836109ff8784611855565b600a5550505b600754604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b1580156110d757600080fd5b505afa1580156110eb573d6000803e3d6000fd5b505050506040513d602081101561110157600080fd5b5051905061110f81836117ee565b600a541115611165576040805162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b42600b8190556111759083611855565b6009556040805185815290517f60a0c13c5aa0acfe5cd0c4f3ac6b9fe2742094a559183932b66e20108fc2be199181900360200190a150505050565b6111b9611967565b565b6004546001600160a01b031681565b6000858414611220576040805162461bcd60e51b815260206004820152601160248201527f4e6f7420612076616c696420696e707574000000000000000000000000000000604482015290519081900360640190fd5b60005b868110156112615761125988888381811061123a57fe5b9050602002013587878481811061124d57fe5b905060200201356118af565b600101611223565b507fbc197c81000000000000000000000000000000000000000000000000000000009998505050505050505050565b6000836001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b1580156112cb57600080fd5b505afa1580156112df573d6000803e3d6000fd5b505050506040513d60208110156112f557600080fd5b50516007549091506001600160a01b031615611358576040805162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b6001600160a01b03811661136b57600080fd5b6001600160a01b03841661137e57600080fd5b6001600160a01b03831661139157600080fd5b6001600160a01b0382166113a457600080fd5b600780546001600160a01b0380841673ffffffffffffffffffffffffffffffffffffffff19928316179092556008805487841690831617905560068054928616929091169190911790556113f781610a11565b61140083610a11565b611409826114c2565b50505050565b6006546001600160a01b031681565b600b5481565b60026020526000908152604090205460ff1681565b50600190565b6004546001600160a01b0316331461149e576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b6004546001600160a01b03163314611521576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061155c85856118af565b507ff23a6e61000000000000000000000000000000000000000000000000000000009695505050505050565b6007546001600160a01b031681565b60008183106115a657816115a8565b825b9392505050565b6000826115be57506000610a0b565b828202828482816115cb57fe5b04146115a85760405162461bcd60e51b8152600401808060200182810382526021815260200180611f756021913960400191505060405180910390fd5b60026000541415611660576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000553361166e610ced565b600c556116796107d3565b600b556001600160a01b038116156116c05761169481610993565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b60008211611715576040805162461bcd60e51b815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015290519081900360640190fd5b600f546117229083611791565b600f553360009081526010602052604090205461173f9083611791565b33600081815260106020908152604091829020939093558051858152905191927f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d592918290030190a250506001600055565b6000828211156117e8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000808211611844576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161184d57fe5b049392505050565b6000828201838110156115a8576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b33600090815260116020908152604080832085845290915281208054830190556118dc8261089385611439565b9050610baa81611a9e565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610baa908490611c81565b600260005414156119bf576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055336119cd610ced565b600c556119d86107d3565b600b556001600160a01b03811615611a1f576119f381610993565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b336000908152600e60205260409020548015611a9557336000818152600e6020526040812055600754611a5e916001600160a01b0390911690836118e7565b60408051828152905133917f3ad10ba9777a3bc21180a465e5459861d07cbdb271af9a0f10c993b365b760f8919081900360200190a25b50506001600055565b60026000541415611af6576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055611b03610a94565b15611b55576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b33611b5e610ced565b600c55611b696107d3565b600b556001600160a01b03811615611bb057611b8481610993565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b60008211611c05576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015290519081900360640190fd5b600f54611c129083611855565b600f5533600090815260106020526040902054611c2f9083611855565b33600081815260106020908152604091829020939093558051858152905191927f6979598ca4d86fb9b9ff448d56594c8a75674c28a0fd4d913b7e4d342f0cd6a092918290030190a250506001600055565b6000611cd6826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b0316611d329092919063ffffffff16565b805190915015610baa57808060200190516020811015611cf557600080fd5b5051610baa5760405162461bcd60e51b815260040180806020018281038252602a815260200180611f96602a913960400191505060405180910390fd5b6060611d418484600085611d49565b949350505050565b606082471015611d8a5760405162461bcd60e51b8152600401808060200182810382526026815260200180611f4f6026913960400191505060405180910390fd5b611d9385611ea4565b611de4576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611e225780518252601f199092019160209182019101611e03565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611e84576040519150601f19603f3d011682016040523d82523d6000602084013e611e89565b606091505b5091509150611e99828286611eaa565b979650505050505050565b3b151590565b60608315611eb95750816115a8565b825115611ec95782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611f13578181015183820152602001611efb565b50505050905090810190601f168015611f405780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644f6e6c792074686520746f6b656e20656d69747465722063616e2063616c6c20746869732066756e6374696f6ea26469706673582212205deaee3193dba0990ec8c27aab863dfea308aac6d8789926da37fd2bb856264c64736f6c63430007060033";
