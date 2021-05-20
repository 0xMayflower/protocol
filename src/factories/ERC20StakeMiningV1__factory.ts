/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC20StakeMiningV1 } from "../ERC20StakeMiningV1";

export class ERC20StakeMiningV1__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC20StakeMiningV1> {
    return super.deploy(overrides || {}) as Promise<ERC20StakeMiningV1>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC20StakeMiningV1 {
    return super.attach(address) as ERC20StakeMiningV1;
  }
  connect(signer: Signer): ERC20StakeMiningV1__factory {
    return super.connect(signer) as ERC20StakeMiningV1__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): ERC20StakeMiningV1 {
    return new Contract(address, _abi, signerOrProvider) as ERC20StakeMiningV1;
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
    name: "erc20StakeMiningV1",
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
    inputs: [],
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
  "0x608060405260006009556000600a553480156200001b57600080fd5b5060016000819055805460ff19169055600480546001600160a01b031916331790556200004f6301ffc9a760e01b620000c1565b620000616390ca796b60e01b620000c1565b6200007363534a7e1d60e11b620000c1565b620000856399f4b25160e01b620000c1565b62000097632e1a7d4d60e01b620000c1565b620000a96374fd6c7760e11b620000c1565b620000bb63e6b7a15960e01b620000c1565b62000146565b6001600160e01b0319808216141562000121576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152600560205260409020805460ff19166001179055565b611a2b80620001566000396000f3fe608060405234801561001057600080fd5b50600436106101e55760003560e01c80638980f11f1161010f578063c8f33c91116100a2578063e9fad8ee11610071578063e9fad8ee146104c0578063ed63058d146104c8578063fabed4d614610314578063fc0c546a146104ee576101e5565b8063c8f33c9114610464578063cacc4b021461046c578063e6b7a15914610492578063e6c09edf1461049a576101e5565b8063a694fc3a116100de578063a694fc3a146103ff578063b808dce81461041c578063c0c53b8b14610424578063c55dae631461045c576101e5565b80638980f11f146103885780638fa0f3b3146103b457806390ca796b146103da57806399f4b251146103f7576101e5565b80634574f327116101875780635eb44e63116101565780635eb44e6314610368578063764fe7d1146103705780637db4b8bc1461037857806389642c6b14610380576101e5565b80634574f327146102ee5780635bfa1b68146103145780635c975abb1461033a5780635e4d580114610342576101e5565b80632c3678cc116101c35780632c3678cc1461029b5780632e1a7d4d146102a357806332e830d5146102c25780633d64baf1146102ca576101e5565b806301ffc9a7146101ea5780631f402db41461023d578063221fef6a14610275575b600080fd5b6102296004803603602081101561020057600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166104f6565b604080519115158252519081900360200190f35b6102636004803603602081101561025357600080fd5b50356001600160a01b031661052d565b60408051918252519081900360200190f35b6102636004803603602081101561028b57600080fd5b50356001600160a01b031661053f565b610263610551565b6102c0600480360360208110156102b957600080fd5b5035610557565b005b61026361057a565b6102d261058e565b604080516001600160a01b039092168252519081900360200190f35b6102636004803603602081101561030457600080fd5b50356001600160a01b031661059d565b6102c06004803603602081101561032a57600080fd5b50356001600160a01b031661061b565b61022961069e565b6102636004803603602081101561035857600080fd5b50356001600160a01b03166106a7565b6102636106b9565b6102636106bf565b6102636106c5565b610263610758565b6102c06004803603604081101561039e57600080fd5b506001600160a01b0381351690602001356107a6565b610229600480360360208110156103ca57600080fd5b50356001600160a01b0316610943565b6102c0600480360360208110156103f057600080fd5b5035610958565b6102c0610c22565b6102c06004803603602081101561041557600080fd5b5035610c2c565b6102d2610c4d565b6102c06004803603606081101561043a57600080fd5b506001600160a01b038135811691602081013582169160409091013516610c5c565b6102d2610ddb565b610263610dea565b6102296004803603602081101561048257600080fd5b50356001600160a01b0316610df0565b610229610e05565b6102c0600480360360208110156104b057600080fd5b50356001600160a01b0316610e0a565b6102c0610e8d565b6102c0600480360360208110156104de57600080fd5b50356001600160a01b0316610eae565b6102d2610f3c565b7fffffffff000000000000000000000000000000000000000000000000000000001660009081526005602052604090205460ff1690565b60106020526000908152604090205481565b600d6020526000908152604090205481565b600a5481565b61056081610f4b565b600654610577906001600160a01b031633836110d4565b50565b600061058842600954611159565b90505b90565b6008546001600160a01b031681565b6001600160a01b0381166000908152600e6020908152604080832054600d909252822054610615919061060f90670de0b6b3a764000090610609906105ea906105e4610758565b90611171565b6001600160a01b038816600090815260106020526040902054906111ce565b90611227565b9061128e565b92915050565b6004546001600160a01b0316331461067a576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60015460ff1690565b600e6020526000908152604090205481565b60095481565b600f5481565b600080600860009054906101000a90046001600160a01b03166001600160a01b031663a5fbe1b76040518163ffffffff1660e01b815260040160206040518083038186803b15801561071657600080fd5b505afa15801561072a573d6000803e3d6000fd5b505050506040513d602081101561074057600080fd5b5051600a5490915061075290826111ce565b91505090565b6000600f546000141561076e5750600c5461058b565b61058861079d600f54610609670de0b6b3a7640000610797600a54610797600b546105e461057a565b906111ce565b600c549061128e565b6004546001600160a01b03163314610805576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090205460ff1615610873576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526002602052604090205460ff16156108e1576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6004546108fb906001600160a01b038481169116836110d4565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60036020526000908152604090205460ff1681565b6008546001600160a01b031633146109a15760405162461bcd60e51b815260040180806020018281038252602d8152602001806119c9602d913960400191505060405180910390fd5b60006109ab610758565b600c556109b661057a565b600b556001600160a01b038116156109fd576109d18161059d565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b600854604080517fa5fbe1b700000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163a5fbe1b7916004808301926020929190829003018186803b158015610a5b57600080fd5b505afa158015610a6f573d6000803e3d6000fd5b505050506040513d6020811015610a8557600080fd5b50516009549091504210610aa557610a9d8382611227565b600a55610ae4565b600954600090610ab59042611171565b90506000610ace600a54836111ce90919063ffffffff16565b9050610ade83610609878461128e565b600a5550505b600754604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610b4857600080fd5b505afa158015610b5c573d6000803e3d6000fd5b505050506040513d6020811015610b7257600080fd5b50519050610b808183611227565b600a541115610bd6576040805162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b42600b819055610be6908361128e565b6009556040805185815290517f60a0c13c5aa0acfe5cd0c4f3ac6b9fe2742094a559183932b66e20108fc2be199181900360200190a150505050565b610c2a6112e8565b565b600654610c44906001600160a01b031633308461141f565b610577816114a7565b6004546001600160a01b031681565b6000836001600160a01b031663fc0c546a6040518163ffffffff1660e01b815260040160206040518083038186803b158015610c9757600080fd5b505afa158015610cab573d6000803e3d6000fd5b505050506040513d6020811015610cc157600080fd5b50516007549091506001600160a01b031615610d24576040805162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038116610d3757600080fd5b6001600160a01b038416610d4a57600080fd5b6001600160a01b038316610d5d57600080fd5b6001600160a01b038216610d7057600080fd5b600780546001600160a01b0380841673ffffffffffffffffffffffffffffffffffffffff1992831617909255600880548784169083161790556006805492861692909116919091179055610dc38161061b565b610dcc8361061b565b610dd582610eae565b50505050565b6006546001600160a01b031681565b600b5481565b60026020526000908152604090205460ff1681565b600190565b6004546001600160a01b03163314610e69576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b610e95610c22565b33600090815260106020526040902054610c2a90610557565b6004546001600160a01b03163314610f0d576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6007546001600160a01b031681565b60026000541415610fa3576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005533610fb1610758565b600c55610fbc61057a565b600b556001600160a01b0381161561100357610fd78161059d565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b60008211611058576040805162461bcd60e51b815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015290519081900360640190fd5b600f546110659083611171565b600f55336000908152601060205260409020546110829083611171565b33600081815260106020908152604091829020939093558051858152905191927f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d592918290030190a250506001600055565b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261115490849061168a565b505050565b6000818310611168578161116a565b825b9392505050565b6000828211156111c8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826111dd57506000610615565b828202828482816111ea57fe5b041461116a5760405162461bcd60e51b815260040180806020018281038252602181526020018061197e6021913960400191505060405180910390fd5b600080821161127d576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161128657fe5b049392505050565b60008282018381101561116a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b60026000541415611340576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b60026000553361134e610758565b600c5561135961057a565b600b556001600160a01b038116156113a0576113748161059d565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b336000908152600e6020526040902054801561141657336000818152600e60205260408120556007546113df916001600160a01b0390911690836110d4565b60408051828152905133917f3ad10ba9777a3bc21180a465e5459861d07cbdb271af9a0f10c993b365b760f8919081900360200190a25b50506001600055565b604080516001600160a01b0380861660248301528416604482015260648082018490528251808303909101815260849091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167f23b872dd00000000000000000000000000000000000000000000000000000000179052610dd590859061168a565b600260005414156114ff576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b600260005561150c61069e565b1561155e576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b33611567610758565b600c5561157261057a565b600b556001600160a01b038116156115b95761158d8161059d565b6001600160a01b0382166000908152600e6020908152604080832093909355600c54600d909152919020555b6000821161160e576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015290519081900360640190fd5b600f5461161b908361128e565b600f5533600090815260106020526040902054611638908361128e565b33600081815260106020908152604091829020939093558051858152905191927f6979598ca4d86fb9b9ff448d56594c8a75674c28a0fd4d913b7e4d342f0cd6a092918290030190a250506001600055565b60006116df826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661173b9092919063ffffffff16565b805190915015611154578080602001905160208110156116fe57600080fd5b50516111545760405162461bcd60e51b815260040180806020018281038252602a81526020018061199f602a913960400191505060405180910390fd5b606061174a8484600085611752565b949350505050565b6060824710156117935760405162461bcd60e51b81526004018080602001828103825260268152602001806119586026913960400191505060405180910390fd5b61179c856118ad565b6117ed576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b6020831061182b5780518252601f19909201916020918201910161180c565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d806000811461188d576040519150601f19603f3d011682016040523d82523d6000602084013e611892565b606091505b50915091506118a28282866118b3565b979650505050505050565b3b151590565b606083156118c257508161116a565b8251156118d25782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561191c578181015183820152602001611904565b50505050905090810190601f1680156119495780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644f6e6c792074686520746f6b656e20656d69747465722063616e2063616c6c20746869732066756e6374696f6ea2646970667358221220dce7fd8743639a3aeb4b69b047b9d0f48100cd5d8b16c45628e661bfcd9a29ce64736f6c63430007060033";
