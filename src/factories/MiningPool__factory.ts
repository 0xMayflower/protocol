/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { MiningPool } from "../MiningPool";

export class MiningPool__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<MiningPool> {
    return super.deploy(overrides || {}) as Promise<MiningPool>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): MiningPool {
    return super.attach(address) as MiningPool;
  }
  connect(signer: Signer): MiningPool__factory {
    return super.connect(signer) as MiningPool__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): MiningPool {
    return new Contract(address, _abi, signerOrProvider) as MiningPool;
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
        internalType: "contract IERC20",
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
        name: "_token",
        type: "address",
      },
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
    inputs: [],
    name: "token",
    outputs: [
      {
        internalType: "contract IERC20",
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
        internalType: "contract ITokenEmitter",
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
];

const _bytecode =
  "0x60806040526000600855600060095534801561001a57600080fd5b5060016000819055805460ff19169055600480546001600160a01b0319163317905561131e8061004b6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c806389642c6b116100ee578063c8f33c9111610097578063ed63058d11610071578063ed63058d146103bd578063f8c8765e146103e3578063fabed4d614610260578063fc0c546a14610421576101a3565b8063c8f33c9114610369578063cacc4b0214610371578063e6c09edf14610397576101a3565b806390ca796b116100c857806390ca796b1461033c578063b808dce814610359578063c55dae6314610361576101a3565b806389642c6b146102e25780638980f11f146102ea5780638fa0f3b314610316576101a3565b80635bfa1b68116101505780635eb44e631161012a5780635eb44e63146102ca578063764fe7d1146102d25780637db4b8bc146102da576101a3565b80635bfa1b68146102605780635c975abb146102885780635e4d5801146102a4576101a3565b806332e830d51161018157806332e830d51461020e5780633d64baf1146102165780634574f3271461023a576101a3565b80631f402db4146101a8578063221fef6a146101e05780632c3678cc14610206575b600080fd5b6101ce600480360360208110156101be57600080fd5b50356001600160a01b0316610429565b60408051918252519081900360200190f35b6101ce600480360360208110156101f657600080fd5b50356001600160a01b031661043b565b6101ce61044d565b6101ce610453565b61021e610467565b604080516001600160a01b039092168252519081900360200190f35b6101ce6004803603602081101561025057600080fd5b50356001600160a01b0316610476565b6102866004803603602081101561027657600080fd5b50356001600160a01b03166104f4565b005b610290610577565b604080519115158252519081900360200190f35b6101ce600480360360208110156102ba57600080fd5b50356001600160a01b0316610580565b6101ce610592565b6101ce610598565b6101ce61059e565b6101ce610631565b6102866004803603604081101561030057600080fd5b506001600160a01b03813516906020013561067f565b6102906004803603602081101561032c57600080fd5b50356001600160a01b031661081c565b6102866004803603602081101561035257600080fd5b5035610831565b61021e610afb565b61021e610b0a565b6101ce610b19565b6102906004803603602081101561038757600080fd5b50356001600160a01b0316610b1f565b610286600480360360208110156103ad57600080fd5b50356001600160a01b0316610b34565b610286600480360360208110156103d357600080fd5b50356001600160a01b0316610bb7565b610286600480360360808110156103f957600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516610c45565b61021e610d5a565b600f6020526000908152604090205481565b600c6020526000908152604090205481565b60095481565b600061046142600854610d69565b90505b90565b6007546001600160a01b031681565b6001600160a01b0381166000908152600d6020908152604080832054600c9092528220546104ee91906104e890670de0b6b3a7640000906104e2906104c3906104bd610631565b90610d81565b6001600160a01b0388166000908152600f602052604090205490610dde565b90610e37565b90610e9e565b92915050565b6004546001600160a01b03163314610553576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60015460ff1690565b600d6020526000908152604090205481565b60085481565b600e5481565b600080600760009054906101000a90046001600160a01b03166001600160a01b031663a5fbe1b76040518163ffffffff1660e01b815260040160206040518083038186803b1580156105ef57600080fd5b505afa158015610603573d6000803e3d6000fd5b505050506040513d602081101561061957600080fd5b505160095490915061062b9082610dde565b91505090565b6000600e54600014156106475750600b54610464565b610461610676600e546104e2670de0b6b3a7640000610670600954610670600a546104bd610453565b90610dde565b600b5490610e9e565b6004546001600160a01b031633146106de576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090205460ff161561074c576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526002602052604090205460ff16156107ba576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6004546107d4906001600160a01b03848116911683610ef8565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60036020526000908152604090205460ff1681565b6007546001600160a01b0316331461087a5760405162461bcd60e51b815260040180806020018281038252602d8152602001806112bc602d913960400191505060405180910390fd5b6000610884610631565b600b5561088f610453565b600a556001600160a01b038116156108d6576108aa81610476565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b600754604080517fa5fbe1b700000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163a5fbe1b7916004808301926020929190829003018186803b15801561093457600080fd5b505afa158015610948573d6000803e3d6000fd5b505050506040513d602081101561095e57600080fd5b5051600854909150421061097e576109768382610e37565b6009556109bd565b60085460009061098e9042610d81565b905060006109a760095483610dde90919063ffffffff16565b90506109b7836104e28784610e9e565b60095550505b600654604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610a2157600080fd5b505afa158015610a35573d6000803e3d6000fd5b505050506040513d6020811015610a4b57600080fd5b50519050610a598183610e37565b6009541115610aaf576040805162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b42600a819055610abf9083610e9e565b6008556040805185815290517f60a0c13c5aa0acfe5cd0c4f3ac6b9fe2742094a559183932b66e20108fc2be199181900360200190a150505050565b6004546001600160a01b031681565b6005546001600160a01b031681565b600a5481565b60026020526000908152604090205460ff1681565b6004546001600160a01b03163314610b93576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b6004546001600160a01b03163314610c16576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6006546001600160a01b031615610ca3576040805162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038416610cb657600080fd5b6001600160a01b038316610cc957600080fd5b6001600160a01b038216610cdc57600080fd5b6001600160a01b038116610cef57600080fd5b600680546001600160a01b0380871673ffffffffffffffffffffffffffffffffffffffff1992831617909255600780548684169083161790556005805492851692909116919091179055610d42846104f4565b610d4b826104f4565b610d5481610bb7565b50505050565b6006546001600160a01b031681565b6000818310610d785781610d7a565b825b9392505050565b600082821115610dd8576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b600082610ded575060006104ee565b82820282848281610dfa57fe5b0414610d7a5760405162461bcd60e51b81526004018080602001828103825260218152602001806112716021913960400191505060405180910390fd5b6000808211610e8d576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b818381610e9657fe5b049392505050565b600082820183811015610d7a576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb00000000000000000000000000000000000000000000000000000000179052610f78908490610f7d565b505050565b6000610fd2826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b031661102e9092919063ffffffff16565b805190915015610f7857808060200190516020811015610ff157600080fd5b5051610f785760405162461bcd60e51b815260040180806020018281038252602a815260200180611292602a913960400191505060405180910390fd5b606061103d8484600085611045565b949350505050565b6060824710156110865760405162461bcd60e51b815260040180806020018281038252602681526020018061124b6026913960400191505060405180910390fd5b61108f856111a0565b6110e0576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b6020831061111e5780518252601f1990920191602091820191016110ff565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611180576040519150601f19603f3d011682016040523d82523d6000602084013e611185565b606091505b50915091506111958282866111a6565b979650505050505050565b3b151590565b606083156111b5575081610d7a565b8251156111c55782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b8381101561120f5781810151838201526020016111f7565b50505050905090810190601f16801561123c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644f6e6c792074686520746f6b656e20656d69747465722063616e2063616c6c20746869732066756e6374696f6ea2646970667358221220058f11b9db7b241f57a3a03e81eb4a22d13d265d4cfceaf32a8a64296103628f64736f6c63430007060033";
