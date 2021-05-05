/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { StableReserves } from "../StableReserves";

export class StableReserves__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _gov: string,
    _commitmentToken: string,
    _baseCurrency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<StableReserves> {
    return super.deploy(
      _gov,
      _commitmentToken,
      _baseCurrency,
      overrides || {}
    ) as Promise<StableReserves>;
  }
  getDeployTransaction(
    _gov: string,
    _commitmentToken: string,
    _baseCurrency: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _gov,
      _commitmentToken,
      _baseCurrency,
      overrides || {}
    );
  }
  attach(address: string): StableReserves {
    return super.attach(address) as StableReserves;
  }
  connect(signer: Signer): StableReserves__factory {
    return super.connect(signer) as StableReserves__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): StableReserves {
    return new Contract(address, _abi, signerOrProvider) as StableReserves;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
      {
        internalType: "address",
        name: "_commitmentToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_baseCurrency",
        type: "address",
      },
    ],
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
        name: "minter",
        type: "address",
      },
    ],
    name: "MinterUpdated",
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
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "Redeemed",
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
    name: "baseCurrency",
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
    name: "commitmentToken",
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
        internalType: "address",
        name: "recipient",
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
    name: "grant",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
    ],
    name: "init",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "mintable",
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
    name: "minters",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "payInsteadOfWorking",
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
    inputs: [],
    name: "priceOfCommitmentToken",
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
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "redeem",
    outputs: [],
    stateMutability: "nonpayable",
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
    name: "reserveAndMint",
    outputs: [],
    stateMutability: "nonpayable",
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
  {
    inputs: [
      {
        internalType: "address",
        name: "minter",
        type: "address",
      },
      {
        internalType: "bool",
        name: "active",
        type: "bool",
      },
    ],
    name: "setMinter",
    outputs: [],
    stateMutability: "nonpayable",
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
  "0x60a060405260006004556000600555614e206008553480156200002157600080fd5b5060405162001db538038062001db5833981810160405260608110156200004757600080fd5b50805160208083015160409093015160028054336001600160a01b0319918216811790925560038054821683179055600680548216909217909155600780549091166001600160a01b038616179055606081901b6001600160601b03191660805291929190620000c29082906200011f811b6200071b17901c565b620000d8826200011f60201b6200071b1760201c565b620000ee83620001a360201b620011ee1760201c565b62000104836200022560201b62000add1760201c565b5050600a80546001600160a01b03191633179055506200033c565b6002546001600160a01b031633146200017f576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b6002546001600160a01b0316331462000203576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6003546001600160a01b0316331462000276576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6001600160a01b038116620002d2576040805162461bcd60e51b815260206004820152601860248201527f55736520616e61726368697a65282920696e73746561642e0000000000000000604482015290519081900360640190fd5b620002dd81620002e0565b50565b6003546040516001600160a01b038084169216907f48da34dfe9ebb4198c3f70d8382467788dcee33984c79a74fa850772c4e5e36f90600090a3600380546001600160a01b0319166001600160a01b0392909216919091179055565b60805160601c611a476200036e6000398061069652806108c65280610ab55280610f6752806111bc5250611a476000f3fe608060405234801561001057600080fd5b50600436106101ae5760003560e01c8063ab033ea9116100ee578063db006a7511610097578063eaa2cabb11610071578063eaa2cabb14610497578063ed63058d146104b4578063f46eccc4146104da578063fabed4d614610221576101ae565b8063db006a7514610437578063de19d07914610454578063e6c09edf14610471576101ae565b8063cacc4b02116100c8578063cacc4b0214610328578063cf456ae71461034e578063dad0ac8f1461037c576101ae565b8063ab033ea9146102f2578063b808dce814610318578063bd9db9bb14610320576101ae565b806366bfc1581161015b57806389a2bc4e1161013557806389a2bc4e146102a05780638fa0f3b3146102a857806392a85fde146102e25780639c724e24146102ea576101ae565b806366bfc1581461024f5780636be698df146102575780638980f11f14610274576101ae565b80634bf365df1161018c5780634bf365df146102075780635bfa1b6814610221578063605cfbb514610247576101ae565b806312d43a51146101b357806319ab453c146101d75780631b343adc146101ff575b600080fd5b6101bb610500565b604080516001600160a01b039092168252519081900360200190f35b6101fd600480360360208110156101ed57600080fd5b50356001600160a01b031661050f565b005b6101fd610599565b61020f6105f3565b60408051918252519081900360200190f35b6101fd6004803603602081101561023757600080fd5b50356001600160a01b031661071b565b6101fd61079e565b61020f610849565b6101fd6004803603602081101561026d57600080fd5b503561084f565b6101fd6004803603604081101561028a57600080fd5b506001600160a01b0381351690602001356108fb565b61020f610a98565b6102ce600480360360208110156102be57600080fd5b50356001600160a01b0316610a9e565b604080519115158252519081900360200190f35b6101bb610ab3565b61020f610ad7565b6101fd6004803603602081101561030857600080fd5b50356001600160a01b0316610add565b6101bb610b91565b6101bb610ba0565b6102ce6004803603602081101561033e57600080fd5b50356001600160a01b0316610baf565b6101fd6004803603604081101561036457600080fd5b506001600160a01b0381351690602001351515610bc4565b6101fd6004803603606081101561039257600080fd5b6001600160a01b03823516916020810135918101906060810160408201356401000000008111156103c257600080fd5b8201836020820111156103d457600080fd5b803590602001918460018302840111640100000000831117156103f657600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610c22945050505050565b6101fd6004803603602081101561044d57600080fd5b5035610df5565b6101fd6004803603602081101561046a57600080fd5b503561101b565b6101fd6004803603602081101561048757600080fd5b50356001600160a01b0316611104565b6101fd600480360360208110156104ad57600080fd5b503561118a565b6101fd600480360360208110156104ca57600080fd5b50356001600160a01b03166111ee565b6102ce600480360360208110156104f057600080fd5b50356001600160a01b031661127c565b6003546001600160a01b031681565b6006546001600160a01b0316331461056e576040805162461bcd60e51b815260206004820181905260248201527f4f6e6c7920616c6c6f77656420746f2074686520696e6974696c61697a65722e604482015290519081900360640190fd5b610579816001611291565b506006805473ffffffffffffffffffffffffffffffffffffffff19169055565b6003546001600160a01b031633146105e9576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6105f1611317565b565b600080600760009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561064457600080fd5b505afa158015610658573d6000803e3d6000fd5b505050506040513d602081101561066e57600080fd5b5051604080516370a0823160e01b815230600482015290519192506000916001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016916370a08231916024808301926020929190829003018186803b1580156106dc57600080fd5b505afa1580156106f0573d6000803e3d6000fd5b505050506040513d602081101561070657600080fd5b505190506107148183611350565b9250505090565b6002546001600160a01b0316331461077a576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152602081905260409020805460ff19166001179055565b6005546107f2576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b6005544210156105e9576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b60045481565b3360009081526009602052604090205460ff168061087757506003546001600160a01b031633145b6108b9576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6108ee6001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846113b2565b6108f83382611425565b50565b6002546001600160a01b0316331461095a576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526001602052604090205460ff16156109c8576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526020819052604090205460ff1615610a36576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b600254610a50906001600160a01b0384811691168361150b565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60085481565b60016020526000908152604090205460ff1681565b7f000000000000000000000000000000000000000000000000000000000000000081565b60055481565b6003546001600160a01b03163314610b2d576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6001600160a01b038116610b88576040805162461bcd60e51b815260206004820152601860248201527f55736520616e61726368697a65282920696e73746561642e0000000000000000604482015290519081900360640190fd5b6108f881611562565b6002546001600160a01b031681565b6007546001600160a01b031681565b60006020819052908152604090205460ff1681565b6003546001600160a01b03163314610c14576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b610c1e8282611291565b5050565b6003546001600160a01b03163314610c72576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b610c7c8383611425565b6007546040516001600160a01b039091166024820181815260448301859052606060648401908152845160848501528451600094610d93947fd76a093b000000000000000000000000000000000000000000000000000000009490938993899360a4019060208501908083838d5b83811015610d02578181015183820152602001610cea565b50505050905090810190601f168015610d2f5780820380516001836020036101000a031916815260200191505b50945050505050604051602081830303815290604052906001600160e01b0319166020820180516001600160e01b0383818316178352505050506040518060600160405280602481526020016119a2602491396001600160a01b03871691906115cb565b805190915015610def57808060200190516020811015610db257600080fd5b5051610def5760405162461bcd60e51b81526004018080602001828103825260248152602001806119a26024913960400191505060405180910390fd5b50505050565b600754604080516370a0823160e01b8152336004820152905183926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610e3f57600080fd5b505afa158015610e53573d6000803e3d6000fd5b505050506040513d6020811015610e6957600080fd5b50511015610ebe576040805162461bcd60e51b815260206004820152601260248201527f4e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b600754604080517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810184905290516001600160a01b03909216916379cc67909160448082019260009290919082900301818387803b158015610f2a57600080fd5b505af1158015610f3e573d6000803e3d6000fd5b50506040805163a9059cbb60e01b81523360048201526024810185905290516001600160a01b037f000000000000000000000000000000000000000000000000000000000000000016935063a9059cbb925060448083019260209291908290030181600087803b158015610fb157600080fd5b505af1158015610fc5573d6000803e3d6000fd5b505050506040513d6020811015610fdb57600080fd5b5050604080513381526020810183905281517f4896181ff8f4543cc00db9fe9b6fb7e6f032b7eb772c72ab1ec1b4d2e03b9369929181900390910190a150565b6003546001600160a01b0316331461106b576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b600554156110c0576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207570646174652e000000000000000000000000000000000000604482015290519081900360640190fd5b428110156110ff5760405162461bcd60e51b81526004018080602001828103825260228152602001806119f06022913960400191505060405180910390fd5b600555565b6002546001600160a01b03163314611163576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600160208190526040909120805460ff19169091179055565b60006111ad6127106111a7600854856115e490919063ffffffff16565b9061163d565b90506111e46001600160a01b037f0000000000000000000000000000000000000000000000000000000000000000163330846113b2565b610c1e3383611425565b6002546001600160a01b0316331461124d576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6002805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60096020526000908152604090205460ff1681565b6001600160a01b03821660009081526009602052604090205460ff161515811515146112ec576040516001600160a01b038316907fad0f299ec81a386c98df0ac27dae11dd020ed1b56963c53a7292e7a3a314539a90600090a25b6001600160a01b03919091166000908152600960205260409020805460ff1916911515919091179055565b6113216000611562565b426004556040517fbf30e910dd2b6e24c75c800d9f3477674e89a4b45e366f87cd03c99e0ba6496190600090a1565b6000828211156113a7576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b508082035b92915050565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180516001600160e01b03167f23b872dd00000000000000000000000000000000000000000000000000000000179052610def9085906116a4565b61142d6105f3565b811115611481576040805162461bcd60e51b815260206004820152600d60248201527f4f7574206f662062756467657400000000000000000000000000000000000000604482015290519081900360640190fd5b600754604080517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b03858116600483015260248201859052915191909216916340c10f1991604480830192600092919082900301818387803b1580156114ef57600080fd5b505af1158015611503573d6000803e3d6000fd5b505050505050565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180516001600160e01b031663a9059cbb60e01b17905261155d9084906116a4565b505050565b6003546040516001600160a01b038084169216907f48da34dfe9ebb4198c3f70d8382467788dcee33984c79a74fa850772c4e5e36f90600090a36003805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b60606115da8484600085611755565b90505b9392505050565b6000826115f3575060006113ac565b8282028284828161160057fe5b04146115dd5760405162461bcd60e51b81526004018080602001828103825260218152602001806119816021913960400191505060405180910390fd5b6000808211611693576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161169c57fe5b049392505050565b60006116f9826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115cb9092919063ffffffff16565b80519091501561155d5780806020019051602081101561171857600080fd5b505161155d5760405162461bcd60e51b815260040180806020018281038252602a8152602001806119c6602a913960400191505060405180910390fd5b6060824710156117965760405162461bcd60e51b815260040180806020018281038252602681526020018061195b6026913960400191505060405180910390fd5b61179f856118b0565b6117f0576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b6020831061182e5780518252601f19909201916020918201910161180f565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611890576040519150601f19603f3d011682016040523d82523d6000602084013e611895565b606091505b50915091506118a58282866118b6565b979650505050505050565b3b151590565b606083156118c55750816115dd565b8251156118d55782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561191f578181015183820152602001611907565b50505050905090810190601f16801561194c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f774772616e7452656365697665723a206c6f772d6c6576656c2063616c6c206661696c65645361666545524332303a204552433230206f7065726174696f6e20646964206e6f74207375636365656454696d65706f696e742073686f756c6420626520696e20746865206675747572652ea2646970667358221220df433cb3c62df9636f75ce25c3fcb83d4b90064aaa3ca60e665dd0dbef56266164736f6c63430007060033";
