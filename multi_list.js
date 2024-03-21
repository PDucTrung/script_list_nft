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

const listArr = readXlsx(path);
let list_arr = listArr.map((item) => {
  return {
    psp34_contract_address: item.A.trim(),
    token_id: item.B,
    price: item.C,
  };
});

console.log(list_arr);

const PROVIDER = process.env.PROVIDER_URL;
const provider = new WsProvider(PROVIDER);

const api = new ApiPromise({ provider, rpc: jsonrpc });

// connect to alephzero
const connect = async () => {
  try {
    api.on("connected", () => {
      api.isReady.then(() => {
        console.log("Smartnet Connected");
      });
    });

    api.on("ready", async () => {
      console.log("Smartnet Ready");

      // connect staking contract
      setMarketplaceContract(api, marketplace);
      console.log("Staking Contract is ready");

      await handle_list();
    });
  } catch (err) {
    console.log(err);
  }
};

//
const handle_list = async () => {
  const total_round = list_arr.length;
  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);
  try {
    for (let i = 0; i < total_round; i++) {
      try {
        console.log(`round ${i + 1}: run`);
        // connect psp34 contract
        setPadoraNftContract(api, pandora_psp34);
        // connect collection manager contract
        setCollectionManagerContract(api, collection_manager);

        // check is active
        let isActive = await getCollectionIsActive(
          list_arr[i].psp34_contract_address
        );
        console.log({
          psp34_contract_address: list_arr[i].psp34_contract_address,
          isActive,
        });
        if (isActive) {
          // check owner
          let owner = await pandora_psp34_getOwnerAddressByTokenId(
            list_arr[i].token_id
          );
          console.log({ owner });
          if (owner !== keypair.address) {
            console.log("you not owner token id");
          } else {
            // approve
            let approved = await pandora_psp34_approval(
              marketplace.CONTRACT_ADDRESS,
              list_arr[i].token_id,
              true
            );

            // list
            if (approved) {
              const listed = await list(
                list_arr[i].psp34_contract_address,
                list_arr[i].token_id,
                list_arr[i].price
              );

              if (!listed) {
                console.log("can't list toke");
              } else {
                await createMetadataJson(list_arr[i].token_id);
              }
            } else {
              console.log("can't approve");
            }
          }
        } else {
          console.log("Collection not active");
          return;
        }

        console.log(`round ${i + 1}: finalized`);
      } catch (e) {
        console.log({ ERROR: e });
        break;
      }
    }
    console.log(`COMPLETED!`);
  } catch (e) {
    console.error({ ERROR: e });
    return;
  }
};

connect();
