const { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
let { readXlsx } = require("./utils.js");

const { marketplace } = require("./contracts/marketplace.js");
const {
  setMarketplaceContract,
  list,
} = require("./contracts/marketplace_contract_calls.js");

const { nft } = require("./contracts/nft721-psp34-standard.js");
const {
  setNftContract,
  approval,
  getOwnerAddressByTokenId,
} = require("./contracts/nft721-psp34-standard_call.js");

const { collection_manager } = require("./contracts/collection-manager.js");
const {
  setCollectionManagerContract,
  getCollectionIsActive,
} = require("./contracts/collection-manager_calls.js");

const { pandora_psp34 } = require("./contracts/pandora_psp34.js");
const {
  pandora_psp34_approval,
  pandora_psp34_getOwnerAddressByTokenId,
  setPadoraNftContract,
  setMultipleAttributesNFT,
  createMetadataJson,
} = require("./contracts/pandora_psp34_calls.js");

require("dotenv").config();

const path = "data.xlsx";

// get data excel
const listArr = readXlsx(path);
let list_arr = listArr.map((item) => {
  return {
    psp34_contract_address: item.A.trim(),
    token_id: item.B,
    price: item.C,
  };
});

// no get data excel
let total = 100;
let price = 10;
let list_arr_no_excel = Array.from({ length: total }).map((item, index) => {
  let id = index + 1;
  return {
    psp34_contract_address: pandora_psp34.CONTRACT_ADDRESS,
    token_id: id,
    price: price,
  };
});

list_arr = [...list_arr_no_excel];

console.log(list_arr, list_arr_no_excel);

const render = async (total_round) => {
  for (let i = 0; i < total_round; i++) {
    await createMetadataJson(list_arr[i].token_id);
  }
};

render(total);
