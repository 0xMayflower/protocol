/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Signer,
  BigNumberish,
  Contract,
  ContractFactory,
  Overrides,
} from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { Product } from "../Product";

export class Product__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    _manufacturer: string,
    _marketplace: string,
    _maxSupply: BigNumberish,
    _name: string,
    _symbol: string,
    _baseURI: string,
    _description: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<Product> {
    return super.deploy(
      _manufacturer,
      _marketplace,
      _maxSupply,
      _name,
      _symbol,
      _baseURI,
      _description,
      overrides || {}
    ) as Promise<Product>;
  }
  getDeployTransaction(
    _manufacturer: string,
    _marketplace: string,
    _maxSupply: BigNumberish,
    _name: string,
    _symbol: string,
    _baseURI: string,
    _description: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(
      _manufacturer,
      _marketplace,
      _maxSupply,
      _name,
      _symbol,
      _baseURI,
      _description,
      overrides || {}
    );
  }
  attach(address: string): Product {
    return super.attach(address) as Product;
  }
  connect(signer: Signer): Product__factory {
    return super.connect(signer) as Product__factory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): Product {
    return new Contract(address, _abi, signerOrProvider) as Product;
  }
}

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_manufacturer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_symbol",
        type: "string",
      },
      {
        internalType: "string",
        name: "_baseURI",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "approved",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "ApprovalForAll",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "_marketplace",
        type: "address",
      },
    ],
    name: "MarketplaceUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
    ],
    name: "balanceOf",
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
    name: "baseURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "burn",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "deliver",
    outputs: [
      {
        internalType: "uint256[]",
        name: "ids",
        type: "uint256[]",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "description",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
        internalType: "string",
        name: "perpetualURI",
        type: "string",
      },
    ],
    name: "engrave",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
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
    name: "getApproved",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
    ],
    name: "isApprovedForAll",
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
    name: "manufacturer",
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
    name: "marketplace",
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
    name: "maxSupply",
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
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
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
    ],
    name: "ownerOf",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
      {
        internalType: "bytes",
        name: "_data",
        type: "bytes",
      },
    ],
    name: "safeTransferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "operator",
        type: "address",
      },
      {
        internalType: "bool",
        name: "approved",
        type: "bool",
      },
    ],
    name: "setApprovalForAll",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_maxSupply",
        type: "uint256",
      },
    ],
    name: "setMaxSupply",
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
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenByIndex",
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
        name: "owner",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "tokenOfOwnerByIndex",
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
    ],
    name: "tokenURI",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
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
        name: "from",
        type: "address",
      },
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "tokenId",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x60806040523480156200001157600080fd5b5060405162002abf38038062002abf833981810160405260e08110156200003757600080fd5b8151602083015160408085015160608601805192519496939591949391820192846401000000008211156200006b57600080fd5b9083019060208201858111156200008157600080fd5b82516401000000008111828201881017156200009c57600080fd5b82525081516020918201929091019080838360005b83811015620000cb578181015183820152602001620000b1565b50505050905090810190601f168015620000f95780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011d57600080fd5b9083019060208201858111156200013357600080fd5b82516401000000008111828201881017156200014e57600080fd5b82525081516020918201929091019080838360005b838110156200017d57818101518382015260200162000163565b50505050905090810190601f168015620001ab5780820380516001836020036101000a031916815260200191505b5060405260200180516040519392919084640100000000821115620001cf57600080fd5b908301906020820185811115620001e557600080fd5b82516401000000008111828201881017156200020057600080fd5b82525081516020918201929091019080838360005b838110156200022f57818101518382015260200162000215565b50505050905090810190601f1680156200025d5780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200028157600080fd5b9083019060208201858111156200029757600080fd5b8251640100000000811182820188101715620002b257600080fd5b82525081516020918201929091019080838360005b83811015620002e1578181015183820152602001620002c7565b50505050905090810190601f1680156200030f5780820380516001836020036101000a031916815260200191505b50604052508591508490506200032c6301ffc9a760e01b620003f3565b81516200034190600690602085019062000491565b5080516200035790600790602084019062000491565b506200036a6380ac58cd60e01b620003f3565b6200037c635b5e139f60e01b620003f3565b6200038e63780e9d6360e01b620003f3565b5050600a80546001600160a01b03808a166001600160a01b031992831617909255600b805492891692909116919091179055600d859055620003d08262000478565b8051620003e590600e90602084019062000491565b50505050505050506200053d565b6001600160e01b0319808216141562000453576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b80516200048d90600990602084019062000491565b5050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282620004c9576000855562000514565b82601f10620004e457805160ff191683800117855562000514565b8280016001018555821562000514579182015b8281111562000514578251825591602001919060010190620004f7565b506200052292915062000526565b5090565b5b8082111562000522576000815560010162000527565b612572806200054d6000396000f3fe608060405234801561001057600080fd5b50600436106101a35760003560e01c80636352211e116100ee57806395d89b4111610097578063b88d4fde11610071578063b88d4fde146105aa578063c87b56dd14610670578063d5abeb011461068d578063e985e9c514610695576101a3565b806395d89b411461056c578063a22cb46514610574578063abc8c7af146105a2576101a3565b806370a08231116100c857806370a08231146105365780637284e4161461055c5780637475428214610564576101a3565b80636352211e146104f45780636c0360eb146105115780636f8b44b014610519576101a3565b806323b872dd1161015057806342842e0e1161012a57806342842e0e1461048457806342966c68146104ba5780634f6ccce7146104d7576101a3565b806323b872dd146103a65780632f745c59146103dc5780633a537b0c14610408576101a3565b8063095ea7b311610181578063095ea7b3146102b157806318160ddd146102df57806322a2b627146102f9576101a3565b806301ffc9a7146101a857806306fdde03146101fb578063081812fc14610278575b600080fd5b6101e7600480360360208110156101be57600080fd5b50357fffffffff00000000000000000000000000000000000000000000000000000000166106c3565b604080519115158252519081900360200190f35b6102036106fe565b6040805160208082528351818301528351919283929083019185019080838360005b8381101561023d578181015183820152602001610225565b50505050905090810190601f16801561026a5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6102956004803603602081101561028e57600080fd5b5035610794565b604080516001600160a01b039092168252519081900360200190f35b6102dd600480360360408110156102c757600080fd5b506001600160a01b0381351690602001356107f6565b005b6102e76108d1565b60408051918252519081900360200190f35b6101e76004803603604081101561030f57600080fd5b8135919081019060408101602082013564010000000081111561033157600080fd5b82018360208201111561034357600080fd5b8035906020019184600183028401116401000000008311171561036557600080fd5b91908080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920191909152509295506108e2945050505050565b6102dd600480360360608110156103bc57600080fd5b506001600160a01b038135811691602081013590911690604001356109e3565b6102e7600480360360408110156103f257600080fd5b506001600160a01b038135169060200135610a3a565b6104346004803603604081101561041e57600080fd5b506001600160a01b038135169060200135610a63565b60408051602080825283518183015283519192839290830191858101910280838360005b83811015610470578181015183820152602001610458565b505050509050019250505060405180910390f35b6102dd6004803603606081101561049a57600080fd5b506001600160a01b03813581169160208101359091169060400135610bb7565b6102dd600480360360208110156104d057600080fd5b5035610bd2565b6102e7600480360360208110156104ed57600080fd5b5035610c24565b6102956004803603602081101561050a57600080fd5b5035610c3a565b610203610c62565b6102dd6004803603602081101561052f57600080fd5b5035610cc3565b6102e76004803603602081101561054c57600080fd5b50356001600160a01b0316610d6d565b610203610dd5565b610295610e63565b610203610e72565b6102dd6004803603604081101561058a57600080fd5b506001600160a01b0381351690602001351515610ed3565b610295610fd8565b6102dd600480360360808110156105c057600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156105fb57600080fd5b82018360208201111561060d57600080fd5b8035906020019184600183028401116401000000008311171561062f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610fe7945050505050565b6102036004803603602081101561068657600080fd5b5035611045565b6102e7611145565b6101e7600480360360408110156106ab57600080fd5b506001600160a01b038135811691602001351661114b565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b820191906000526020600020905b81548152906001019060200180831161076d57829003601f168201915b5050505050905090565b600061079f82611179565b6107da5760405162461bcd60e51b815260040180806020018281038252602c815260200180612437602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b600061080182610c3a565b9050806001600160a01b0316836001600160a01b031614156108545760405162461bcd60e51b81526004018080602001828103825260218152602001806124bb6021913960400191505060405180910390fd5b806001600160a01b0316610866611186565b6001600160a01b03161480610887575061088781610882611186565b61114b565b6108c25760405162461bcd60e51b81526004018080602001828103825260388152602001806123646038913960400191505060405180910390fd5b6108cc838361118a565b505050565b60006108dd6002611210565b905090565b600a546000906001600160a01b03163314610944576040805162461bcd60e51b815260206004820152601d60248201527f616c6c6f776564206f6e6c7920666f72206d616e756661637475726572000000604482015290519081900360640190fd5b6000838152600c602052604090205460026000196101006001841615020190911604156109b8576040805162461bcd60e51b815260206004820152601060248201527f416c726561647920656e67726176656400000000000000000000000000000000604482015290519081900360640190fd5b6000838152600c6020908152604090912083516109d7928501906121de565b50600190505b92915050565b6109f46109ee611186565b8261121b565b610a2f5760405162461bcd60e51b81526004018080602001828103825260318152602001806124dc6031913960400191505060405180910390fd5b6108cc8383836112bf565b6001600160a01b0382166000908152600160205260408120610a5c908361140b565b9392505050565b600b546060906001600160a01b03163314610ac5576040805162461bcd60e51b815260206004820181905260248201527f616c6c6f776564206f6e6c7920666f72204d61726b657420636f6e7472616374604482015290519081900360640190fd5b8167ffffffffffffffff81118015610adc57600080fd5b50604051908082528060200260200182016040528015610b06578160200160208202803683370190505b50905060005b82811015610bb0576000610b1e6108d1565b9050600d5460001480610b335750600d548111155b610b84576040805162461bcd60e51b815260206004820152600860248201527f536f6c64206f7574000000000000000000000000000000000000000000000000604482015290519081900360640190fd5b80838381518110610b9157fe5b602002602001018181525050610ba78582611417565b50600101610b0c565b5092915050565b6108cc83838360405180602001604052806000815250610fe7565b610bdd6109ee611186565b610c185760405162461bcd60e51b815260040180806020018281038252603081526020018061250d6030913960400191505060405180910390fd5b610c2181611545565b50565b600080610c32600284611612565b509392505050565b60006109dd826040518060600160405280602981526020016123c6602991396002919061162e565b60098054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b600a546001600160a01b03163314610d22576040805162461bcd60e51b815260206004820152601d60248201527f616c6c6f776564206f6e6c7920666f72206d616e756661637475726572000000604482015290519081900360640190fd5b80610d2b6108d1565b1115610d685760405162461bcd60e51b81526004018080602001828103825260268152602001806124116026913960400191505060405180910390fd5b600d55565b60006001600160a01b038216610db45760405162461bcd60e51b815260040180806020018281038252602a81526020018061239c602a913960400191505060405180910390fd5b6001600160a01b03821660009081526001602052604090206109dd90611210565b600e805460408051602060026001851615610100026000190190941693909304601f81018490048402820184019092528181529291830182828015610e5b5780601f10610e3057610100808354040283529160200191610e5b565b820191906000526020600020905b815481529060010190602001808311610e3e57829003601f168201915b505050505081565b600a546001600160a01b031681565b60078054604080516020601f600260001961010060018816150201909516949094049384018190048102820181019092528281526060939092909183018282801561078a5780601f1061075f5761010080835404028352916020019161078a565b610edb611186565b6001600160a01b0316826001600160a01b03161415610f41576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610f4e611186565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610f92611186565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b600b546001600160a01b031681565b610ff8610ff2611186565b8361121b565b6110335760405162461bcd60e51b81526004018080602001828103825260318152602001806124dc6031913960400191505060405180910390fd5b61103f8484848461163b565b50505050565b6000818152600c6020908152604080832080548251601f60026000196101006001861615020190931692909204918201859004850281018501909352808352606094938301828280156110d95780601f106110ae576101008083540402835291602001916110d9565b820191906000526020600020905b8154815290600101906020018083116110bc57829003601f168201915b505050505090508051600014611134576110f283611179565b61112d5760405162461bcd60e51b815260040180806020018281038252602f81526020018061248c602f913960400191505060405180910390fd5b90506106f9565b61113d8361168d565b9150506106f9565b600d5481565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b60006109dd60028361190e565b3390565b600081815260046020526040902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000166001600160a01b03841690811790915581906111d782610c3a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b60006109dd8261191a565b600061122682611179565b6112615760405162461bcd60e51b815260040180806020018281038252602c815260200180612338602c913960400191505060405180910390fd5b600061126c83610c3a565b9050806001600160a01b0316846001600160a01b031614806112a75750836001600160a01b031661129c84610794565b6001600160a01b0316145b806112b757506112b7818561114b565b949350505050565b826001600160a01b03166112d282610c3a565b6001600160a01b0316146113175760405162461bcd60e51b81526004018080602001828103825260298152602001806124636029913960400191505060405180910390fd5b6001600160a01b03821661135c5760405162461bcd60e51b81526004018080602001828103825260248152602001806123146024913960400191505060405180910390fd5b6113678383836108cc565b61137260008261118a565b6001600160a01b0383166000908152600160205260409020611394908261191e565b506001600160a01b03821660009081526001602052604090206113b7908261192a565b506113c460028284611936565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610a5c838361194c565b6001600160a01b038216611472576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b61147b81611179565b156114cd576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b6114d9600083836108cc565b6001600160a01b03821660009081526001602052604090206114fb908261192a565b5061150860028284611936565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b600061155082610c3a565b905061155e816000846108cc565b61156960008361118a565b60008281526008602052604090205460026000196101006001841615020190911604156115a75760008281526008602052604081206115a79161226a565b6001600160a01b03811660009081526001602052604090206115c9908361191e565b506115d56002836119b0565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600080808061162186866119bc565b9097909650945050505050565b60006112b7848484611a37565b6116468484846112bf565b61165284848484611b01565b61103f5760405162461bcd60e51b81526004018080602001828103825260328152602001806122e26032913960400191505060405180910390fd5b606061169882611179565b6116d35760405162461bcd60e51b815260040180806020018281038252602f81526020018061248c602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f8101859004850282018501909352828152929091908301828280156117665780601f1061173b57610100808354040283529160200191611766565b820191906000526020600020905b81548152906001019060200180831161174957829003601f168201915b505050505090506000611777610c62565b905080516000141561178b575090506106f9565b81511561184c5780826040516020018083805190602001908083835b602083106117c65780518252601f1990920191602091820191016117a7565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b6020831061180e5780518252601f1990920191602091820191016117ef565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506106f9565b8061185685611cab565b6040516020018083805190602001908083835b602083106118885780518252601f199092019160209182019101611869565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b602083106118d05780518252601f1990920191602091820191016118b1565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6000610a5c8383611dba565b5490565b6000610a5c8383611dd2565b6000610a5c8383611e98565b60006112b784846001600160a01b038516611ee2565b8154600090821061198e5760405162461bcd60e51b81526004018080602001828103825260228152602001806122c06022913960400191505060405180910390fd5b82600001828154811061199d57fe5b9060005260206000200154905092915050565b6000610a5c8383611f79565b815460009081908310611a005760405162461bcd60e51b81526004018080602001828103825260228152602001806123ef6022913960400191505060405180910390fd5b6000846000018481548110611a1157fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b60008281526001840160205260408120548281611ad25760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b83811015611a97578181015183820152602001611a7f565b50505050905090810190601f168015611ac45780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50846000016001820381548110611ae557fe5b9060005260206000209060020201600101549150509392505050565b6000611b15846001600160a01b031661204d565b611b21575060016112b7565b6000611c59630a85bd0160e11b611b36611186565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b83811015611b9d578181015183820152602001611b85565b50505050905090810190601f168015611bca5780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506040518060600160405280603281526020016122e2603291396001600160a01b0388169190612053565b90506000818060200190516020811015611c7257600080fd5b50517fffffffff0000000000000000000000000000000000000000000000000000000016630a85bd0160e11b1492505050949350505050565b606081611cec575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526106f9565b8160005b8115611d0457600101600a82049150611cf0565b60008167ffffffffffffffff81118015611d1d57600080fd5b506040519080825280601f01601f191660200182016040528015611d48576020820181803683370190505b50859350905060001982015b8315611db157600a840660300160f81b82828060019003935081518110611d7757fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a84049350611d54565b50949350505050565b60009081526001919091016020526040902054151590565b60008181526001830160205260408120548015611e8e5783546000198083019190810190600090879083908110611e0557fe5b9060005260206000200154905080876000018481548110611e2257fe5b600091825260208083209091019290925582815260018981019092526040902090840190558654879080611e5257fe5b600190038181906000526020600020016000905590558660010160008781526020019081526020016000206000905560019450505050506109dd565b60009150506109dd565b6000611ea48383611dba565b611eda575081546001818101845560008481526020808220909301849055845484825282860190935260409020919091556109dd565b5060006109dd565b600082815260018401602052604081205480611f47575050604080518082018252838152602080820184815286546001818101895560008981528481209551600290930290950191825591519082015586548684528188019092529290912055610a5c565b82856000016001830381548110611f5a57fe5b9060005260206000209060020201600101819055506000915050610a5c565b60008181526001830160205260408120548015611e8e5783546000198083019190810190600090879083908110611fac57fe5b9060005260206000209060020201905080876000018481548110611fcc57fe5b60009182526020808320845460029093020191825560019384015491840191909155835482528983019052604090209084019055865487908061200b57fe5b60008281526020808220600260001990940193840201828155600190810183905592909355888152898201909252604082209190915594506109dd9350505050565b3b151590565b60606112b78484600085856120678561204d565b6120b8576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b602083106120f65780518252601f1990920191602091820191016120d7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114612158576040519150601f19603f3d011682016040523d82523d6000602084013e61215d565b606091505b509150915061216d828286612178565b979650505050505050565b60608315612187575081610a5c565b8251156121975782518084602001fd5b60405162461bcd60e51b8152602060048201818152845160248401528451859391928392604401919085019080838360008315611a97578181015183820152602001611a7f565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282612214576000855561225a565b82601f1061222d57805160ff191683800117855561225a565b8280016001018555821561225a579182015b8281111561225a57825182559160200191906001019061223f565b506122669291506122aa565b5090565b50805460018160011615610100020316600290046000825580601f106122905750610c21565b601f016020900490600052602060002090810190610c2191905b5b8082111561226657600081556001016122ab56fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734d617820737570706c79206973206c657373207468616e2063757272656e7420737570706c794552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732314275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220de204eef81ff1bc9120df9206dba8b2823ee9c0129eb63fe276c456f57c2170d64736f6c63430007060033";
