const { Keyring, ApiPromise, WsProvider } = require("@polkadot/api");
const { jsonrpc } = require("@polkadot/types/interfaces/jsonrpc");
const { pandora_psp34 } = require("./contracts/pandora_psp34.js");
const {
  isOwner,
  multipleMintTicket,
  setPadoraNftContract,
} = require("./contracts/pandora_psp34_calls.js");

const socket = process.env.PROVIDER_URL;
const provider = new WsProvider(socket);
const api = new ApiPromise({ provider, rpc: jsonrpc });
const mint_amounts = 100;
const amounts_in_round = 50;

require("dotenv").config();

// connect to alephzero
const connect = async () => {
  try {
    api.on("connected", () => {
      api.isReady.then(() => {
        console.log("Smartnet BETAZ Connected");
      });
    });

    api.on("ready", async () => {
      console.log("Smartnet BETAZ Ready");

      // connect staking contract
      setPadoraNftContract(api, pandora_psp34);
      console.log("Staking Contract is ready");

      await handle_mint(mint_amounts, amounts_in_round);
    });
  } catch (err) {
    console.log(err);
  }
};

//
const handle_mint = async (mint_amounts, amounts_in_round) => {
  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);
  const total_round = mint_amounts / amounts_in_round;
  try {
    let is_owner = await isOwner(keypair.address);
    console.log(`is_owner: ${is_owner}`);

    if (!is_owner) {
      console.log(`Caller: ${keypair.address} is not owner`);
    } else {
      for (let i = 0; i < total_round; i++) {
        try {
          console.log(`round: ${i + 1} mint ${amounts_in_round} tickets`);
          await multipleMintTicket(keypair.address, amounts_in_round);
          console.log(`round: ${i + 1} finalized`);
        } catch (e) {
          console.log(`ERROR: ${e.messages}`);
        }
      }
    }

    console.log(`Process ${mint_amounts} tickets -  COMPLETED!`);
  } catch (e) {
    console.error(`ERROR: ${e.messages}`);
  }
};

connect();
