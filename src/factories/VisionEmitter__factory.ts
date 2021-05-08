/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { VisionEmitter } from "../VisionEmitter";

export class VisionEmitter__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _devShares: string,
    _protocolFund: string,
    _gov: string,
    _visionToken: string,
    _burnMiningPoolFactory: string,
    _stakeMiningPoolFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<VisionEmitter> {
    return super.deploy(
      _devShares,
      _protocolFund,
      _gov,
      _visionToken,
      _burnMiningPoolFactory,
      _stakeMiningPoolFactory,
      overrides || {}
    ) as Promise<VisionEmitter>;
  }
  getDeployTransaction(
    _devShares: string,
    _protocolFund: string,
    _gov: string,
    _visionToken: string,
    _burnMiningPoolFactory: string,
    _stakeMiningPoolFactory: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _devShares,
      _protocolFund,
      _gov,
      _visionToken,
      _burnMiningPoolFactory,
      _stakeMiningPoolFactory,
      overrides || {}
    );
  }
  attach(address: string): VisionEmitter {
    return super.attach(address) as VisionEmitter;
  }
  connect(signer: Signer): VisionEmitter__factory {
    return super.connect(signer) as VisionEmitter__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): VisionEmitter {
    return new Contract(address, _abi, signerOrProvider) as VisionEmitter;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_devShares",
        type: "address",
      },
      {
        internalType: "address",
        name: "_protocolFund",
        type: "address",
      },
      {
        internalType: "address",
        name: "_gov",
        type: "address",
      },
      {
        internalType: "address",
        name: "_visionToken",
        type: "address",
      },
      {
        internalType: "address",
        name: "_burnMiningPoolFactory",
        type: "address",
      },
      {
        internalType: "address",
        name: "_stakeMiningPoolFactory",
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
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "EmissionCutRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "EmissionRateUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "numberOfPools",
        type: "uint256",
      },
    ],
    name: "EmissionWeightUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "NewBurnMiningPool",
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
        name: "baseToken",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "pool",
        type: "address",
      },
    ],
    name: "NewStakeMiningPool",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [],
    name: "Start",
    type: "event",
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
    name: "TokenEmission",
    type: "event",
  },
  {
    inputs: [],
    name: "DENOMINATOR",
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
    name: "INITIAL_EMISSION",
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
    name: "burnMiningPoolFactory",
    outputs: [
      {
        internalType: "contract IMiningPoolFactory",
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
        name: "",
        type: "address",
      },
    ],
    name: "burnMiningPools",
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
    name: "dev",
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
    name: "distribute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "emission",
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
    name: "emissionCutRate",
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
    name: "emissionPeriod",
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
    name: "emissionStarted",
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
    name: "emissionWeekNum",
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
    name: "emissionWeight",
    outputs: [
      {
        internalType: "uint256",
        name: "protocolFund",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "caller",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "dev",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "sum",
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
    name: "getNumberOfPools",
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
        name: "poolIndex",
        type: "uint256",
      },
    ],
    name: "getPoolWeight",
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
    inputs: [],
    name: "minEmissionRatePerWeek",
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
        name: "_burningToken",
        type: "address",
      },
    ],
    name: "newBurnMiningPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_stakingToken",
        type: "address",
      },
    ],
    name: "newStakeMiningPool",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
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
    name: "pools",
    outputs: [
      {
        internalType: "contract IMiningPool",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "protocolFund",
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
        internalType: "address[]",
        name: "_miningPools",
        type: "address[]",
      },
      {
        internalType: "uint256[]",
        name: "_weights",
        type: "uint256[]",
      },
      {
        internalType: "uint256",
        name: "_protocolFund",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_caller",
        type: "uint256",
      },
    ],
    name: "setEmission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setEmissionCutRate",
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
        internalType: "uint256",
        name: "rate",
        type: "uint256",
      },
    ],
    name: "setMinimumRate",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_fund",
        type: "address",
      },
    ],
    name: "setProtocolFund",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "stakeMiningPoolFactory",
    outputs: [
      {
        internalType: "contract IMiningPoolFactory",
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
        name: "",
        type: "address",
      },
    ],
    name: "stakeMiningPools",
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
    name: "start",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "visionToken",
    outputs: [
      {
        internalType: "contract VISION",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405260006001556000600255603c600355610bb86004556a13da329b633647180000006008553480156200003557600080fd5b5060405162001fde38038062001fde833981810160405260c08110156200005b57600080fd5b508051602082015160408301516060840151608085015160a090950151600080546001600160a01b0319163317905593949293919290916200009d856200012d565b600580546001600160a01b038086166001600160a01b031992831617909255600680548584169083161790556007805492841692909116919091179055620000e586620001a0565b600960006101000a8154816001600160a01b0302191690836001600160a01b031602179055506200012184620002ad60201b62000ab11760201c565b505050505050620003c3565b6000546001600160a01b031633146200017e576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b60065460055460008054604080516301ff66a160e61b81526001600160a01b0394851660048201523060248201528685166044820152918416606483015251919384931691637fd9a8409160848082019260209290919082900301818787803b1580156200020d57600080fd5b505af115801562000222573d6000803e3d6000fd5b505050506040513d60208110156200023957600080fd5b50516001600160a01b038481166000818152600c602090815260409182902080546001600160a01b0319169486169485179055815192835282019290925281519293507f4205efd639890993ef4f1c4cdc3b285e95951e80f1e2c8dfe89845f48d89d85b929081900390910190a192915050565b6000546001600160a01b03163314620002fe576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6001600160a01b0381166200035a576040805162461bcd60e51b815260206004820152601860248201527f55736520616e61726368697a65282920696e73746561642e0000000000000000604482015290519081900360640190fd5b620003658162000368565b50565b600080546040516001600160a01b03808516939216917f48da34dfe9ebb4198c3f70d8382467788dcee33984c79a74fa850772c4e5e36f91a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b611c0b80620003d36000396000f3fe608060405234801561001057600080fd5b50600436106102265760003560e01c8063918f86741161012a578063b7b246b0116100bd578063de19d0791161008c578063ec21787011610071578063ec21787014610478578063f0e6680c146105a4578063f2fd83e0146105ca57610226565b8063de19d07914610453578063e4fc6b6d1461047057610226565b8063b7b246b01461040d578063bca46bc214610415578063be9a65551461041d578063d82b474e1461042557610226565b8063a951e833116100f9578063a951e83314610387578063ab033ea9146103a4578063ac4afa38146103ca578063b2e60b4a146103e757610226565b8063918f86741461036757806391cca3db1461036f5780639c724e2414610377578063a5fbe1b71461037f57610226565b8063605cfbb5116101bd57806369af98311161018c578063761c52e611610171578063761c52e61461033a578063827c049e146103425780638fd4a5a41461034a57610226565b806369af98311461032a5780636aef1b901461033257610226565b8063605cfbb5146102ec5780636265d458146102f45780636411f6f61461031a57806366bfc1581461032257610226565b80631b343adc116101f95780631b343adc146102ae57806334ab0cec146102b65780634f1c5b34146102dc5780635d7de7ad146102e457610226565b806304d1ad111461022b5780630697cce91461024557806312d43a511461026d5780631617701914610291575b600080fd5b6102336105d2565b60408051918252519081900360200190f35b61026b6004803603602081101561025b57600080fd5b50356001600160a01b03166105e1565b005b610275610653565b604080516001600160a01b039092168252519081900360200190f35b61026b600480360360208110156102a757600080fd5b5035610662565b61026b61072d565b610275600480360360208110156102cc57600080fd5b50356001600160a01b0316610787565b610233610891565b610275610897565b61026b6108a6565b6102756004803603602081101561030a57600080fd5b50356001600160a01b0316610951565b61023361096c565b610233610972565b610233610978565b61023361097e565b610233610984565b61023361098b565b6102336004803603602081101561036057600080fd5b5035610991565b6102336109b5565b6102756109bb565b6102336109ca565b6102336109d0565b61026b6004803603602081101561039d57600080fd5b50356109d7565b61026b600480360360208110156103ba57600080fd5b50356001600160a01b0316610ab1565b610275600480360360208110156103e057600080fd5b5035610b68565b610275600480360360208110156103fd57600080fd5b50356001600160a01b0316610b92565b610275610bad565b610275610bbc565b61026b610bcb565b61042d610c9f565b604080519485526020850193909352838301919091526060830152519081900360800190f35b61026b6004803603602081101561046957600080fd5b5035610cae565b61026b610d97565b61026b6004803603608081101561048e57600080fd5b8101906020810181356401000000008111156104a957600080fd5b8201836020820111156104bb57600080fd5b803590602001918460208302840111640100000000831117156104dd57600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929594936020810193503591505064010000000081111561052d57600080fd5b82018360208201111561053f57600080fd5b8035906020019184602083028401116401000000008311171561056157600080fd5b919080806020026020016040519081016040528093929190818152602001838360200280828437600092019190915250929550508235935050506020013561112d565b610275600480360360208110156105ba57600080fd5b50356001600160a01b0316611523565b61027561162d565b6a13da329b6336471800000081565b6000546001600160a01b03163314610631576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b600a80546001600160a01b0319166001600160a01b0392909216919091179055565b6000546001600160a01b031681565b6000546001600160a01b031633146106b2576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60868111156106f25760405162461bcd60e51b815260040180806020018281038252603c815260200180611ad0603c913960400191505060405180910390fd5b60038190556040805182815290517fffcc630bf88a67ba7c8b27440787c31777ae923aee1e9bbd0127feea56da2cd09181900360200190a150565b6000546001600160a01b0316331461077d576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b61078561163c565b565b60075460055460008054604080516301ff66a160e61b81526001600160a01b0394851660048201523060248201528685166044820152918416606483015251919384931691637fd9a8409160848082019260209290919082900301818787803b1580156107f357600080fd5b505af1158015610807573d6000803e3d6000fd5b505050506040513d602081101561081d57600080fd5b50516001600160a01b038481166000818152600d602090815260409182902080546001600160a01b0319169486169485179055815192835282019290925281519293507fe1e6051678875790c118eda2c71fb47fd45fd6839feaa39b17f961fd2d2f84f9929081900390910190a192915050565b60135481565b6006546001600160a01b031681565b6002546108fa576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b60025442101561077d576040805162461bcd60e51b815260206004820152601660248201527f43616e6e6f742064697362616e642074686520676f7600000000000000000000604482015290519081900360640190fd5b600d602052600090815260409020546001600160a01b031681565b60045481565b60015481565b60035481565b60145481565b600b545b90565b60085481565b6000600e60000182815481106109a357fe5b90600052602060002001549050919050565b61271081565b6009546001600160a01b031681565b60025481565b62093a8081565b6000546001600160a01b03163314610a27576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b806103e811158015610a3b57506123288111155b610a765760405162461bcd60e51b8152600401808060200182810382526039815260200180611b0c6039913960400191505060405180910390fd5b60048190556040805182815290517f0e832b98816325af61286fb1960fe1d779180daddf5f515ac68529f05e7288b89181900360200190a150565b6000546001600160a01b03163314610b01576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b6001600160a01b038116610b5c576040805162461bcd60e51b815260206004820152601860248201527f55736520616e61726368697a65282920696e73746561642e0000000000000000604482015290519081900360640190fd5b610b6581611675565b50565b600b8181548110610b7857600080fd5b6000918252602090912001546001600160a01b0316905081565b600c602052600090815260409020546001600160a01b031681565b600a546001600160a01b031681565b6007546001600160a01b031681565b6000546001600160a01b03163314610c1b576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60135415610c70576040805162461bcd60e51b815260206004820152600f60248201527f416c726561647920737461727465640000000000000000000000000000000000604482015290519081900360640190fd5b426013556040517f1b55ba3aa851a46be3b365aee5b5c140edd620d578922f3e8466d2cbd96f954b90600090a1565b600f5460105460115460125484565b6000546001600160a01b03163314610cfe576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b60025415610d53576040805162461bcd60e51b815260206004820152600e60248201527f43616e6e6f74207570646174652e000000000000000000000000000000000000604482015290519081900360640190fd5b42811015610d925760405162461bcd60e51b8152600401808060200182810382526022815260200180611bb46022913960400191505060405180910390fd5b600255565b6000610dbb62093a80610db5601354426116d090919063ffffffff16565b90611732565b90506014548111610dfd5760405162461bcd60e51b8152600401808060200182810382526022815260200180611b926022913960400191505060405180910390fd5b6014819055601254600554604080516318160ddd60e01b815290516000926001600160a01b0316916318160ddd916004828101926020929190829003018186803b158015610e4a57600080fd5b505afa158015610e5e573d6000803e3d6000fd5b505050506040513d6020811015610e7457600080fd5b5051905060005b600e54811015610f4657600b548110610edb576040805162461bcd60e51b815260206004820152600c60248201527f6f7574206f6620696e6465780000000000000000000000000000000000000000604482015290519081900360640190fd5b6000610f1084610db5600854600e6000018681548110610ef757fe5b906000526020600020015461179990919063ffffffff16565b9050610f3d600b8381548110610f2257fe5b6000918252602090912001546001600160a01b0316826117f9565b50600101610e7b565b50600554600a54600854600f546001600160a01b03938416936340c10f19931691610f77918791610db59190611799565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b158015610fbd57600080fd5b505af1158015610fd1573d6000803e3d6000fd5b50506005546008546010546001600160a01b0390921693506340c10f1992503391611001918791610db591611799565b6040518363ffffffff1660e01b815260040180836001600160a01b0316815260200182815260200192505050600060405180830381600087803b15801561104757600080fd5b505af115801561105b573d6000803e3d6000fd5b5050600954600554604080516318160ddd60e01b815290516110ea95506001600160a01b0393841694508693909216916318160ddd91600480820192602092909190829003018186803b1580156110b157600080fd5b505afa1580156110c5573d6000803e3d6000fd5b505050506040513d60208110156110db57600080fd5b505160085491900390036117f9565b60085460408051918252517fa520955117bcc21cb6b9206478092cc311962d4333ecd8f3d142fdee8b912acd9181900360200190a16111276118e1565b50505050565b6000546001600160a01b0316331461117d576040805162461bcd60e51b815260206004820152600e60248201526d139bdd08185d5d1a1bdc9a5e995960921b604482015290519081900360640190fd5b82518451146111bd5760405162461bcd60e51b8152600401808060200182810382526021815260200180611a8e6021913960400191505060405180910390fd5b6000845167ffffffffffffffff811180156111d757600080fd5b50604051908082528060200260200182016040528015611201578160200160208202803683370190505b50905082820160005b86518110156113c757600087828151811061122157fe5b602002602001015190506000816001600160a01b031663c55dae636040518163ffffffff1660e01b815260040160206040518083038186803b15801561126657600080fd5b505afa15801561127a573d6000803e3d6000fd5b505050506040513d602081101561129057600080fd5b50516001600160a01b038082166000908152600d6020526040902054919250838116911614806112dc57506001600160a01b038181166000908152600c60205260409020548116908316145b6113175760405162461bcd60e51b815260040180806020018281038252604d815260200180611b45604d913960600191505060405180910390fd5b61271088848151811061132657fe5b602002602001015110611373576040805162461bcd60e51b815260206004820152601060248201526f70726576656e74206f766572666c6f7760801b604482015290519081900360640190fd5b8185848151811061138057fe5b60200260200101906001600160a01b031690816001600160a01b0316815250508783815181106113ac57fe5b6020026020010151840193505050808060010191505061120a565b506127108410611411576040805162461bcd60e51b815260206004820152601060248201526f70726576656e74206f766572666c6f7760801b604482015290519081900360640190fd5b612710831061145a576040805162461bcd60e51b815260206004820152601060248201526f70726576656e74206f766572666c6f7760801b604482015290519081900360640190fd5b815160148204918201919061147690600b9060208601906119d8565b506040805160a0810182528781526020808201889052918101869052606081018390526080810184905287519091600e916114b6918391908b0190611a3d565b50602082015181600101556040820151816002015560608201518160030155608082015181600401559050507faaabefee88b27f6ef3057e4fdf3039eb328f9f1530f93eb42d8860c001ae60b583516040518082815260200191505060405180910390a150505050505050565b60065460055460008054604080516301ff66a160e61b81526001600160a01b0394851660048201523060248201528685166044820152918416606483015251919384931691637fd9a8409160848082019260209290919082900301818787803b15801561158f57600080fd5b505af11580156115a3573d6000803e3d6000fd5b505050506040513d60208110156115b957600080fd5b50516001600160a01b038481166000818152600c602090815260409182902080546001600160a01b0319169486169485179055815192835282019290925281519293507f4205efd639890993ef4f1c4cdc3b285e95951e80f1e2c8dfe89845f48d89d85b929081900390910190a192915050565b6005546001600160a01b031681565b6116466000611675565b426001556040517fbf30e910dd2b6e24c75c800d9f3477674e89a4b45e366f87cd03c99e0ba6496190600090a1565b600080546040516001600160a01b03808516939216917f48da34dfe9ebb4198c3f70d8382467788dcee33984c79a74fa850772c4e5e36f91a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600082821115611727576040805162461bcd60e51b815260206004820152601e60248201527f536166654d6174683a207375627472616374696f6e206f766572666c6f770000604482015290519081900360640190fd5b508082035b92915050565b6000808211611788576040805162461bcd60e51b815260206004820152601a60248201527f536166654d6174683a206469766973696f6e206279207a65726f000000000000604482015290519081900360640190fd5b81838161179157fe5b049392505050565b6000826117a85750600061172c565b828202828482816117b557fe5b04146117f25760405162461bcd60e51b8152600401808060200182810382526021815260200180611aaf6021913960400191505060405180910390fd5b9392505050565b600554604080517f40c10f190000000000000000000000000000000000000000000000000000000081526001600160a01b03858116600483015260248201859052915191909216916340c10f1991604480830192600092919082900301818387803b15801561186757600080fd5b505af115801561187b573d6000803e3d6000fd5b50505050816001600160a01b03166390ca796b826040518263ffffffff1660e01b815260040180828152602001915050600060405180830381600087803b1580156118c557600080fd5b505af11580156118d9573d6000803e3d6000fd5b505050505050565b6000601454600014156118f657506000610988565b6000611984612710610db5600354600560009054906101000a90046001600160a01b03166001600160a01b03166318160ddd6040518163ffffffff1660e01b815260040160206040518083038186803b15801561195257600080fd5b505afa158015611966573d6000803e3d6000fd5b505050506040513d602081101561197c57600080fd5b505190611799565b905060006119a9612710610db56004546127100360085461179990919063ffffffff16565b90506119b581836119c1565b60088190559250505090565b6000818310156119d157816117f2565b5090919050565b828054828255906000526020600020908101928215611a2d579160200282015b82811115611a2d57825182546001600160a01b0319166001600160a01b039091161782556020909201916001909101906119f8565b50611a39929150611a78565b5090565b828054828255906000526020600020908101928215611a2d579160200282015b82811115611a2d578251825591602001919060010190611a5d565b5b80821115611a395760008155600101611a7956fe426f74682073686f756c642068617665207468652073616d65206c656e6774682e536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7750726f746563742066726f6d20746865207375706572696e666c6174696f6e6172792839392e38252070657220796561722920736974756174696f6e456d697373696f6e206375742073686f756c642062652067726561746572207468616e2031302520616e64206c657373207468616e20393025546865206d696e696e6720706f6f6c2073686f756c64206265206372656174656420766961206e65774275726e4d696e696e67506f6f6c206f72206e65775374616b654d696e696e67506f6f6c416c7265616479206d696e746564206f72206e6f742073746172746564207965742e54696d65706f696e742073686f756c6420626520696e20746865206675747572652ea2646970667358221220c031ceaadf290b1fe0903314815b3a2585acc9200c0b5df7f61d39a7538f25e464736f6c63430007060033";