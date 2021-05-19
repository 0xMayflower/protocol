/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";

import type { ERC721 } from "../ERC721";

export class ERC721__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ERC721> {
    return super.deploy(overrides || {}) as Promise<ERC721>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): ERC721 {
    return super.attach(address) as ERC721;
  }
  connect(signer: Signer): ERC721__factory {
    return super.connect(signer) as ERC721__factory;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ERC721 {
    return new Contract(address, _abi, signerOrProvider) as ERC721;
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
    inputs: [
      {
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
    ],
    name: "mint",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "minter",
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
        internalType: "address",
        name: "_minter",
        type: "address",
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
  "0x60806040523480156200001157600080fd5b50604080518082018252600a8152694552433732314d6f636b60b01b602080830191909152825180840190935260048352634d4f434b60e01b9083015290620000616301ffc9a760e01b620000dd565b81516200007690600690602085019062000162565b5080516200008c90600790602084019062000162565b506200009f6380ac58cd60e01b620000dd565b620000b1635b5e139f60e01b620000dd565b620000c363780e9d6360e01b620000dd565b5050600a80546001600160a01b031916331790556200020e565b6001600160e01b031980821614156200013d576040805162461bcd60e51b815260206004820152601c60248201527f4552433136353a20696e76616c696420696e7465726661636520696400000000604482015290519081900360640190fd5b6001600160e01b0319166000908152602081905260409020805460ff19166001179055565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200019a5760008555620001e5565b82601f10620001b557805160ff1916838001178555620001e5565b82800160010185558215620001e5579182015b82811115620001e5578251825591602001919060010190620001c8565b50620001f3929150620001f7565b5090565b5b80821115620001f35760008155600101620001f8565b611fc3806200021e6000396000f3fe608060405234801561001057600080fd5b50600436106101775760003560e01c806342966c68116100d857806395d89b411161008c578063c87b56dd11610066578063c87b56dd1461051a578063e985e9c514610537578063fca3b5aa1461056557610177565b806395d89b411461041e578063a22cb46514610426578063b88d4fde1461045457610177565b80636352211e116100bd5780636352211e146103d35780636c0360eb146103f057806370a08231146103f857610177565b806342966c68146103995780634f6ccce7146103b657610177565b806318160ddd1161012f5780632f745c59116101145780632f745c591461030b57806340c10f191461033757806342842e0e1461036357610177565b806318160ddd146102bb57806323b872dd146102d557610177565b80630754617211610160578063075461721461024c578063081812fc14610270578063095ea7b31461028d57610177565b806301ffc9a71461017c57806306fdde03146101cf575b600080fd5b6101bb6004803603602081101561019257600080fd5b50357fffffffff000000000000000000000000000000000000000000000000000000001661058b565b604080519115158252519081900360200190f35b6101d76105c6565b6040805160208082528351818301528351919283929083019185019080838360005b838110156102115781810151838201526020016101f9565b50505050905090810190601f16801561023e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61025461065c565b604080516001600160a01b039092168252519081900360200190f35b6102546004803603602081101561028657600080fd5b503561066b565b6102b9600480360360408110156102a357600080fd5b506001600160a01b0381351690602001356106cd565b005b6102c36107a8565b60408051918252519081900360200190f35b6102b9600480360360608110156102eb57600080fd5b506001600160a01b038135811691602081013590911690604001356107b9565b6102c36004803603604081101561032157600080fd5b506001600160a01b038135169060200135610810565b6102b96004803603604081101561034d57600080fd5b506001600160a01b03813516906020013561083b565b6102b96004803603606081101561037957600080fd5b506001600160a01b03813581169160208101359091169060400135610897565b6102b9600480360360208110156103af57600080fd5b50356108b2565b6102c3600480360360208110156103cc57600080fd5b5035610904565b610254600480360360208110156103e957600080fd5b503561091a565b6101d7610942565b6102c36004803603602081101561040e57600080fd5b50356001600160a01b03166109a3565b6101d7610a0b565b6102b96004803603604081101561043c57600080fd5b506001600160a01b0381351690602001351515610a6c565b6102b96004803603608081101561046a57600080fd5b6001600160a01b038235811692602081013590911691604082013591908101906080810160608201356401000000008111156104a557600080fd5b8201836020820111156104b757600080fd5b803590602001918460018302840111640100000000831117156104d957600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610b71945050505050565b6101d76004803603602081101561053057600080fd5b5035610bcf565b6101bb6004803603604081101561054d57600080fd5b506001600160a01b0381358116916020013516610e50565b6102b96004803603602081101561057b57600080fd5b50356001600160a01b0316610e7e565b7fffffffff00000000000000000000000000000000000000000000000000000000811660009081526020819052604090205460ff165b919050565b60068054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106525780601f1061062757610100808354040283529160200191610652565b820191906000526020600020905b81548152906001019060200180831161063557829003601f168201915b5050505050905090565b600a546001600160a01b031681565b600061067682610efb565b6106b15760405162461bcd60e51b815260040180806020018281038252602c815260200180611e88602c913960400191505060405180910390fd5b506000908152600460205260409020546001600160a01b031690565b60006106d88261091a565b9050806001600160a01b0316836001600160a01b0316141561072b5760405162461bcd60e51b8152600401808060200182810382526021815260200180611f0c6021913960400191505060405180910390fd5b806001600160a01b031661073d610f08565b6001600160a01b0316148061075e575061075e81610759610f08565b610e50565b6107995760405162461bcd60e51b8152600401808060200182810382526038815260200180611ddb6038913960400191505060405180910390fd5b6107a38383610f0c565b505050565b60006107b46002610f87565b905090565b6107ca6107c4610f08565b82610f92565b6108055760405162461bcd60e51b8152600401808060200182810382526031815260200180611f2d6031913960400191505060405180910390fd5b6107a3838383611036565b6001600160a01b03821660009081526001602052604081206108329083611182565b90505b92915050565b600a546001600160a01b03163314610889576040805162461bcd60e51b815260206004820152600c60248201526b2737ba10309036b4b73a32b960a11b604482015290519081900360640190fd5b610893828261118e565b5050565b6107a383838360405180602001604052806000815250610b71565b6108bd6107c4610f08565b6108f85760405162461bcd60e51b8152600401808060200182810382526030815260200180611f5e6030913960400191505060405180910390fd5b610901816112bc565b50565b600080610912600284611389565b509392505050565b600061083582604051806060016040528060298152602001611e3d60299139600291906113a5565b60098054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106525780601f1061062757610100808354040283529160200191610652565b60006001600160a01b0382166109ea5760405162461bcd60e51b815260040180806020018281038252602a815260200180611e13602a913960400191505060405180910390fd5b6001600160a01b038216600090815260016020526040902061083590610f87565b60078054604080516020601f60026000196101006001881615020190951694909404938401819004810282018101909252828152606093909290918301828280156106525780601f1061062757610100808354040283529160200191610652565b610a74610f08565b6001600160a01b0316826001600160a01b03161415610ada576040805162461bcd60e51b815260206004820152601960248201527f4552433732313a20617070726f766520746f2063616c6c657200000000000000604482015290519081900360640190fd5b8060056000610ae7610f08565b6001600160a01b03908116825260208083019390935260409182016000908120918716808252919093529120805460ff191692151592909217909155610b2b610f08565b6001600160a01b03167f17307eab39ab6107e8899845ad3d59bd9653f200f220920489ca2b5937696c318360405180821515815260200191505060405180910390a35050565b610b82610b7c610f08565b83610f92565b610bbd5760405162461bcd60e51b8152600401808060200182810382526031815260200180611f2d6031913960400191505060405180910390fd5b610bc9848484846113bc565b50505050565b6060610bda82610efb565b610c155760405162461bcd60e51b815260040180806020018281038252602f815260200180611edd602f913960400191505060405180910390fd5b60008281526008602090815260408083208054825160026001831615610100026000190190921691909104601f810185900485028201850190935282815292909190830182828015610ca85780601f10610c7d57610100808354040283529160200191610ca8565b820191906000526020600020905b815481529060010190602001808311610c8b57829003601f168201915b505050505090506000610cb9610942565b9050805160001415610ccd575090506105c1565b815115610d8e5780826040516020018083805190602001908083835b60208310610d085780518252601f199092019160209182019101610ce9565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610d505780518252601f199092019160209182019101610d31565b6001836020036101000a03801982511681845116808217855250505050505090500192505050604051602081830303815290604052925050506105c1565b80610d988561140e565b6040516020018083805190602001908083835b60208310610dca5780518252601f199092019160209182019101610dab565b51815160209384036101000a600019018019909216911617905285519190930192850191508083835b60208310610e125780518252601f199092019160209182019101610df3565b6001836020036101000a0380198251168184511680821785525050505050509050019250505060405160208183030381529060405292505050919050565b6001600160a01b03918216600090815260056020908152604080832093909416825291909152205460ff1690565b600a546001600160a01b03163314610ecc576040805162461bcd60e51b815260206004820152600c60248201526b2737ba10309036b4b73a32b960a11b604482015290519081900360640190fd5b600a805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0392909216919091179055565b600061083560028361151d565b3390565b6000818152600460205260409020805473ffffffffffffffffffffffffffffffffffffffff19166001600160a01b0384169081179091558190610f4e8261091a565b6001600160a01b03167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b92560405160405180910390a45050565b600061083582611529565b6000610f9d82610efb565b610fd85760405162461bcd60e51b815260040180806020018281038252602c815260200180611daf602c913960400191505060405180910390fd5b6000610fe38361091a565b9050806001600160a01b0316846001600160a01b0316148061101e5750836001600160a01b03166110138461066b565b6001600160a01b0316145b8061102e575061102e8185610e50565b949350505050565b826001600160a01b03166110498261091a565b6001600160a01b03161461108e5760405162461bcd60e51b8152600401808060200182810382526029815260200180611eb46029913960400191505060405180910390fd5b6001600160a01b0382166110d35760405162461bcd60e51b8152600401808060200182810382526024815260200180611d8b6024913960400191505060405180910390fd5b6110de8383836107a3565b6110e9600082610f0c565b6001600160a01b038316600090815260016020526040902061110b908261152d565b506001600160a01b038216600090815260016020526040902061112e9082611539565b5061113b60028284611545565b5080826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef60405160405180910390a4505050565b6000610832838361155b565b6001600160a01b0382166111e9576040805162461bcd60e51b815260206004820181905260248201527f4552433732313a206d696e7420746f20746865207a65726f2061646472657373604482015290519081900360640190fd5b6111f281610efb565b15611244576040805162461bcd60e51b815260206004820152601c60248201527f4552433732313a20746f6b656e20616c7265616479206d696e74656400000000604482015290519081900360640190fd5b611250600083836107a3565b6001600160a01b03821660009081526001602052604090206112729082611539565b5061127f60028284611545565b5060405181906001600160a01b038416906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908290a45050565b60006112c78261091a565b90506112d5816000846107a3565b6112e0600083610f0c565b600082815260086020526040902054600260001961010060018416150201909116041561131e57600082815260086020526040812061131e91611cde565b6001600160a01b0381166000908152600160205260409020611340908361152d565b5061134c6002836115bf565b5060405182906000906001600160a01b038416907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef908390a45050565b600080808061139886866115cb565b9097909650945050505050565b60006113b2848484611646565b90505b9392505050565b6113c7848484611036565b6113d384848484611710565b610bc95760405162461bcd60e51b8152600401808060200182810382526032815260200180611d596032913960400191505060405180910390fd5b60608161144f575060408051808201909152600181527f300000000000000000000000000000000000000000000000000000000000000060208201526105c1565b8160005b811561146757600101600a82049150611453565b60008167ffffffffffffffff8111801561148057600080fd5b506040519080825280601f01601f1916602001820160405280156114ab576020820181803683370190505b50859350905060001982015b831561151457600a840660300160f81b828280600190039350815181106114da57fe5b60200101907effffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff1916908160001a905350600a840493506114b7565b50949350505050565b600061083283836118ba565b5490565b600061083283836118d2565b60006108328383611998565b60006113b284846001600160a01b0385166119e2565b8154600090821061159d5760405162461bcd60e51b8152600401808060200182810382526022815260200180611d376022913960400191505060405180910390fd5b8260000182815481106115ac57fe5b9060005260206000200154905092915050565b60006108328383611a79565b81546000908190831061160f5760405162461bcd60e51b8152600401808060200182810382526022815260200180611e666022913960400191505060405180910390fd5b600084600001848154811061162057fe5b906000526020600020906002020190508060000154816001015492509250509250929050565b600082815260018401602052604081205482816116e15760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156116a657818101518382015260200161168e565b50505050905090810190601f1680156116d35780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508460000160018203815481106116f457fe5b9060005260206000209060020201600101549150509392505050565b6000611724846001600160a01b0316611b4d565b6117305750600161102e565b6000611868630a85bd0160e11b611745610f08565b88878760405160240180856001600160a01b03168152602001846001600160a01b0316815260200183815260200180602001828103825283818151815260200191508051906020019080838360005b838110156117ac578181015183820152602001611794565b50505050905090810190601f1680156117d95780820380516001836020036101000a031916815260200191505b5095505050505050604051602081830303815290604052907bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff8381831617835250505050604051806060016040528060328152602001611d59603291396001600160a01b0388169190611b53565b9050600081806020019051602081101561188157600080fd5b50517fffffffff0000000000000000000000000000000000000000000000000000000016630a85bd0160e11b1492505050949350505050565b60009081526001919091016020526040902054151590565b6000818152600183016020526040812054801561198e578354600019808301919081019060009087908390811061190557fe5b906000526020600020015490508087600001848154811061192257fe5b60009182526020808320909101929092558281526001898101909252604090209084019055865487908061195257fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050610835565b6000915050610835565b60006119a483836118ba565b6119da57508154600181810184556000848152602080822090930184905584548482528286019093526040902091909155610835565b506000610835565b600082815260018401602052604081205480611a475750506040805180820182528381526020808201848152865460018181018955600089815284812095516002909302909501918255915190820155865486845281880190925292909120556113b5565b82856000016001830381548110611a5a57fe5b90600052602060002090600202016001018190555060009150506113b5565b6000818152600183016020526040812054801561198e5783546000198083019190810190600090879083908110611aac57fe5b9060005260206000209060020201905080876000018481548110611acc57fe5b600091825260208083208454600290930201918255600193840154918401919091558354825289830190526040902090840190558654879080611b0b57fe5b60008281526020808220600260001990940193840201828155600190810183905592909355888152898201909252604082209190915594506108359350505050565b3b151590565b60606113b2848460008585611b6785611b4d565b611bb8576040805162461bcd60e51b815260206004820152601d60248201527f416464726573733a2063616c6c20746f206e6f6e2d636f6e7472616374000000604482015290519081900360640190fd5b600080866001600160a01b031685876040518082805190602001908083835b60208310611bf65780518252601f199092019160209182019101611bd7565b6001836020036101000a03801982511681845116808217855250505050505090500191505060006040518083038185875af1925050503d8060008114611c58576040519150601f19603f3d011682016040523d82523d6000602084013e611c5d565b606091505b5091509150611c6d828286611c78565b979650505050505050565b60608315611c875750816113b5565b825115611c975782518084602001fd5b60405162461bcd60e51b81526020600482018181528451602484015284518593919283926044019190850190808383600083156116a657818101518382015260200161168e565b50805460018160011615610100020316600290046000825580601f10611d045750610901565b601f01602090049060005260206000209081019061090191905b80821115611d325760008155600101611d1e565b509056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e64734552433732313a207472616e7366657220746f206e6f6e20455243373231526563656976657220696d706c656d656e7465724552433732313a207472616e7366657220746f20746865207a65726f20616464726573734552433732313a206f70657261746f7220717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76652063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f76656420666f7220616c6c4552433732313a2062616c616e636520717565727920666f7220746865207a65726f20616464726573734552433732313a206f776e657220717565727920666f72206e6f6e6578697374656e7420746f6b656e456e756d657261626c654d61703a20696e646578206f7574206f6620626f756e64734552433732313a20617070726f76656420717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a207472616e73666572206f6620746f6b656e2074686174206973206e6f74206f776e4552433732314d657461646174613a2055524920717565727920666f72206e6f6e6578697374656e7420746f6b656e4552433732313a20617070726f76616c20746f2063757272656e74206f776e65724552433732313a207472616e736665722063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f7665644552433732314275726e61626c653a2063616c6c6572206973206e6f74206f776e6572206e6f7220617070726f766564a2646970667358221220509b8887d1f2b5c83958fc2a613dfcdce84f4c5a6cf0ff72b137c7dadd1c00ea64736f6c63430007060033";
