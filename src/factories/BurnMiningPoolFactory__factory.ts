/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { BurnMiningPoolFactory } from "../BurnMiningPoolFactory";

export class BurnMiningPoolFactory__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<BurnMiningPoolFactory> {
    return super.deploy(overrides || {}) as Promise<BurnMiningPoolFactory>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): BurnMiningPoolFactory {
    return super.attach(address) as BurnMiningPoolFactory;
  }
  connect(signer: Signer): BurnMiningPoolFactory__factory {
    return super.connect(signer) as BurnMiningPoolFactory__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): BurnMiningPoolFactory {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as BurnMiningPoolFactory;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "_token",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_emitter",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_burningToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_recoverTo",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "_poolAddress",
        type: "address",
      },
    ],
    name: "NewBurnMiningPool",
    type: "event",
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
        name: "_emitter",
        type: "address",
      },
      {
        internalType: "address",
        name: "_burningToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_recoverTo",
        type: "address",
      },
    ],
    name: "newPool",
    outputs: [
      {
        internalType: "address",
        name: "_pool",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50611b57806100206000396000f3fe608060405234801561001057600080fd5b506004361061002b5760003560e01c80637fd9a84014610030575b600080fd5b61006e6004803603608081101561004657600080fd5b506001600160a01b03813581169160208101358216916040820135811691606001351661008a565b604080516001600160a01b039092168252519081900360200190f35b6000806040518060200161009d90610219565b6020820181038252601f19601f820116604052509050600086868660405160200180846001600160a01b031660601b8152601401836001600160a01b031660601b8152601401826001600160a01b031660601b81526014019350505050604051602081830303815290604052805190602001209050808251602084016000f5604080517ff8c8765e0000000000000000000000000000000000000000000000000000000081526001600160a01b038a8116600483015289811660248301528881166044830152878116606483015291519295509085169163f8c8765e9160848082019260009290919082900301818387803b15801561019b57600080fd5b505af11580156101af573d6000803e3d6000fd5b5050604080516001600160a01b03808c168252808b166020830152808a168284015280891660608301528716608082015290517fad72e8383d47f59989adc5654fea08c0bf84987832943ac08e781fa9ef096b5993509081900360a0019150a15050949350505050565b6118fb806102278339019056fe60806040526000600855600060095534801561001a57600080fd5b5060016000819055805460ff19169055600480546001600160a01b031916331790556118b08061004b6000396000f3fe608060405234801561001057600080fd5b50600436106101b95760003560e01c806389642c6b116100f9578063cacc4b0211610097578063ed63058d11610071578063ed63058d146103f8578063f8c8765e1461041e578063fabed4d614610295578063fc0c546a1461045c576101b9565b8063cacc4b02146103a4578063e6c09edf146103ca578063e9fad8ee146103f0576101b9565b806390ca796b116100d357806390ca796b1461036f578063b808dce81461038c578063c55dae6314610394578063c8f33c911461039c576101b9565b806389642c6b146103155780638980f11f1461031d5780638fa0f3b314610349576101b9565b80634574f327116101665780635e4d5801116101405780635e4d5801146102d75780635eb44e63146102fd578063764fe7d1146103055780637db4b8bc1461030d576101b9565b80634574f3271461026f5780635bfa1b68146102955780635c975abb146102bb576101b9565b806332e830d51161019757806332e830d5146102245780633d64baf11461022c57806342966c6814610250576101b9565b80631f402db4146101be578063221fef6a146101f65780632c3678cc1461021c575b600080fd5b6101e4600480360360208110156101d457600080fd5b50356001600160a01b0316610464565b60408051918252519081900360200190f35b6101e46004803603602081101561020c57600080fd5b50356001600160a01b0316610476565b6101e4610488565b6101e461048e565b6102346104a2565b604080516001600160a01b039092168252519081900360200190f35b61026d6004803603602081101561026657600080fd5b50356104b1565b005b6101e46004803603602081101561028557600080fd5b50356001600160a01b0316610541565b61026d600480360360208110156102ab57600080fd5b50356001600160a01b03166105bf565b6102c3610642565b604080519115158252519081900360200190f35b6101e4600480360360208110156102ed57600080fd5b50356001600160a01b031661064b565b6101e461065d565b6101e4610663565b6101e4610669565b6101e46106fc565b61026d6004803603604081101561033357600080fd5b506001600160a01b03813516906020013561074a565b6102c36004803603602081101561035f57600080fd5b50356001600160a01b03166108e7565b61026d6004803603602081101561038557600080fd5b50356108fc565b610234610bc6565b610234610bd5565b6101e4610be4565b6102c3600480360360208110156103ba57600080fd5b50356001600160a01b0316610bea565b61026d600480360360208110156103e057600080fd5b50356001600160a01b0316610bff565b61026d610c82565b61026d6004803603602081101561040e57600080fd5b50356001600160a01b0316610ca6565b61026d6004803603608081101561043457600080fd5b506001600160a01b038135811691602081013582169160408201358116916060013516610d34565b610234610e49565b600f6020526000908152604090205481565b600c6020526000908152604090205481565b60095481565b600061049c42600854610e58565b90505b90565b6007546001600160a01b031681565b6104ba81610e70565b600554604080517f79cc67900000000000000000000000000000000000000000000000000000000081523360048201526024810184905290516001600160a01b03909216916379cc67909160448082019260009290919082900301818387803b15801561052657600080fd5b505af115801561053a573d6000803e3d6000fd5b5050505050565b6001600160a01b0381166000908152600d6020908152604080832054600c9092528220546105b991906105b390670de0b6b3a7640000906105ad9061058e906105886106fc565b90611053565b6001600160a01b0388166000908152600f6020526040902054906110b0565b90611109565b90611170565b92915050565b6004546001600160a01b0316331461061e576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600260205260409020805460ff19166001179055565b60015460ff1690565b600d6020526000908152604090205481565b60085481565b600e5481565b600080600760009054906101000a90046001600160a01b03166001600160a01b031663a5fbe1b76040518163ffffffff1660e01b815260040160206040518083038186803b1580156106ba57600080fd5b505afa1580156106ce573d6000803e3d6000fd5b505050506040513d60208110156106e457600080fd5b50516009549091506106f690826110b0565b91505090565b6000600e54600014156107125750600b5461049f565b61049c610741600e546105ad670de0b6b3a764000061073b60095461073b600a5461058861048e565b906110b0565b600b5490611170565b6004546001600160a01b031633146107a9576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526003602052604090205460ff1615610817576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b6001600160a01b03821660009081526002602052604090205460ff1615610885576040805162461bcd60e51b815260206004820152601560248201527f4e6f6e2d7265636f76657261626c652045524332300000000000000000000000604482015290519081900360640190fd5b60045461089f906001600160a01b038481169116836111ca565b604080516001600160a01b03841681526020810183905281517f8c1256b8896378cd5044f80c202f9772b9d77dc85c8a6eb51967210b09bfaa28929181900390910190a15050565b60036020526000908152604090205460ff1681565b6007546001600160a01b031633146109455760405162461bcd60e51b815260040180806020018281038252602d81526020018061184e602d913960400191505060405180910390fd5b600061094f6106fc565b600b5561095a61048e565b600a556001600160a01b038116156109a15761097581610541565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b600754604080517fa5fbe1b700000000000000000000000000000000000000000000000000000000815290516000926001600160a01b03169163a5fbe1b7916004808301926020929190829003018186803b1580156109ff57600080fd5b505afa158015610a13573d6000803e3d6000fd5b505050506040513d6020811015610a2957600080fd5b50516008549091504210610a4957610a418382611109565b600955610a88565b600854600090610a599042611053565b90506000610a72600954836110b090919063ffffffff16565b9050610a82836105ad8784611170565b60095550505b600654604080517f70a0823100000000000000000000000000000000000000000000000000000000815230600482015290516000926001600160a01b0316916370a08231916024808301926020929190829003018186803b158015610aec57600080fd5b505afa158015610b00573d6000803e3d6000fd5b505050506040513d6020811015610b1657600080fd5b50519050610b248183611109565b6009541115610b7a576040805162461bcd60e51b815260206004820152601260248201527f6e6f7420656e6f7567682062616c616e63650000000000000000000000000000604482015290519081900360640190fd5b42600a819055610b8a9083611170565b6008556040805185815290517f60a0c13c5aa0acfe5cd0c4f3ac6b9fe2742094a559183932b66e20108fc2be199181900360200190a150505050565b6004546001600160a01b031681565b6005546001600160a01b031681565b600a5481565b60026020526000908152604090205460ff1681565b6004546001600160a01b03163314610c5e576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6001600160a01b03166000908152600360205260409020805460ff19166001179055565b610c8a61124f565b336000908152600f6020526040902054610ca381611386565b50565b6004546001600160a01b03163314610d05576040805162461bcd60e51b815260206004820152601960248201527f4f6e6c7920616c6c6f77656420746f207265636f766572657200000000000000604482015290519081900360640190fd5b6004805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b6006546001600160a01b031615610d92576040805162461bcd60e51b815260206004820152601360248201527f416c726561647920696e697469616c697a656400000000000000000000000000604482015290519081900360640190fd5b6001600160a01b038416610da557600080fd5b6001600160a01b038316610db857600080fd5b6001600160a01b038216610dcb57600080fd5b6001600160a01b038116610dde57600080fd5b600680546001600160a01b0380871673ffffffffffffffffffffffffffffffffffffffff1992831617909255600780548684169083161790556005805492851692909116919091179055610e31846105bf565b610e3a826105bf565b610e4381610ca6565b50505050565b6006546001600160a01b031681565b6000818310610e675781610e69565b825b9392505050565b60026000541415610ec8576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055610ed5610642565b15610f27576040805162461bcd60e51b815260206004820152601060248201527f5061757361626c653a2070617573656400000000000000000000000000000000604482015290519081900360640190fd5b33610f306106fc565b600b55610f3b61048e565b600a556001600160a01b03811615610f8257610f5681610541565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b60008211610fd7576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207374616b652030000000000000000000000000000000000000604482015290519081900360640190fd5b600e54610fe49083611170565b600e55336000908152600f60205260409020546110019083611170565b336000818152600f6020908152604091829020939093558051858152905191927f6979598ca4d86fb9b9ff448d56594c8a75674c28a0fd4d913b7e4d342f0cd6a092918290030190a250506001600055565b6000828211156110aa576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b50900390565b6000826110bf575060006105b9565b828202828482816110cc57fe5b0414610e695760405162461bcd60e51b81526004018080602001828103825260218152602001806118036021913960400191505060405180910390fd5b600080821161115f576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161116857fe5b049392505050565b600082820183811015610e69576040805162461bcd60e51b815260206004820152601b60248201527f536166654d6174683a206164646974696f6e206f766572666c6f770000000000604482015290519081900360640190fd5b604080516001600160a01b038416602482015260448082018490528251808303909101815260649091019091526020810180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff167fa9059cbb0000000000000000000000000000000000000000000000000000000017905261124a90849061150f565b505050565b600260005414156112a7576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055336112b56106fc565b600b556112c061048e565b600a556001600160a01b03811615611307576112db81610541565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b336000908152600d6020526040902054801561137d57336000818152600d6020526040812055600654611346916001600160a01b0390911690836111ca565b60408051828152905133917f3ad10ba9777a3bc21180a465e5459861d07cbdb271af9a0f10c993b365b760f8919081900360200190a25b50506001600055565b600260005414156113de576040805162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c00604482015290519081900360640190fd5b6002600055336113ec6106fc565b600b556113f761048e565b600a556001600160a01b0381161561143e5761141281610541565b6001600160a01b0382166000908152600d6020908152604080832093909355600b54600c909152919020555b60008211611493576040805162461bcd60e51b815260206004820152601160248201527f43616e6e6f742077697468647261772030000000000000000000000000000000604482015290519081900360640190fd5b600e546114a09083611053565b600e55336000908152600f60205260409020546114bd9083611053565b336000818152600f6020908152604091829020939093558051858152905191927f7084f5476618d8e60b11ef0d7d3f06914655adb8793e28ff7f018d4c76d505d592918290030190a250506001600055565b6000611564826040518060400160405280602081526020017f5361666545524332303a206c6f772d6c6576656c2063616c6c206661696c6564815250856001600160a01b03166115c09092919063ffffffff16565b80519091501561124a5780806020019051602081101561158357600080fd5b505161124a5760405162461bcd60e51b815260040180806020018281038252602a815260200180611824602a913960400191505060405180910390fd5b60606115cf84846000856115d7565b949350505050565b6060824710156116185760405162461bcd60e51b81526004018080602001828103825260268152602001806117dd6026913960400191505060405180910390fd5b61162185611732565b611672576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106116b05780518252601f199092019160209182019101611691565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611712576040519150601f19603f3d011682016040523d82523d6000602084013e611717565b606091505b5091509150611727828286611738565b979650505050505050565b3b151590565b60608315611747575081610e69565b8251156117575782518084602001fd5b8160405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156117a1578181015183820152602001611789565b50505050905090810190601f1680156117ce5780820380516001836020036101000a031916815260200191505b509250505060405180910390fdfe416464726573733a20696e73756666696369656e742062616c616e636520666f722063616c6c536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f775361666545524332303a204552433230206f7065726174696f6e20646964206e6f7420737563636565644f6e6c792074686520746f6b656e20656d69747465722063616e2063616c6c20746869732066756e6374696f6ea264697066735822122041842baf66c0d1a3e349bd05169e8c22ee22997100a0d22284c7f24a50b3660864736f6c63430007060033a2646970667358221220ac357e5bb49d4a14cced514d0b083b6e59f22edcada97ee2468610506a3bed7d64736f6c63430007060033";
