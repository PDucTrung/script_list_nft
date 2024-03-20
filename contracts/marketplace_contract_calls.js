let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { BN } = require("@polkadot/util");
let { getEstimatedGas, isValidAddressPolkadotAddress } = require("../utils");
const { APICall } = require("../api/client");
const { delay } = require("../utils");
require("dotenv").config();

let contract;
let abi_contract;

const setMarketplaceContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const seMarketplaceAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const list = async (nft_contract_address, token_id, price) => {
  if (!contract || !isValidAddressPolkadotAddress(nft_contract_address)) {
    console.log(`Contract or caller not valid!`);
  }

  let gasLimit;
  const value = 0;
  const sale_price = new BN(price * 10 ** 12).toString();

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "list",
    nft_contract_address,
    { u64: token_id },
    sale_price,
    []
  );

  return new Promise((resolve, reject) => {
    contract.tx["list"](
      { gasLimit, value },
      nft_contract_address,
      { u64: token_id },
      sale_price,
      []
    )
      .signAndSend(keypair, async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status.isInBlock) {
          console.log(`list token id ${token_id} and price ${price} ...`);
        } else if (status.isFinalized) {
          await APICall.askBeUpdateNftData({
            collection_address: nft_contract_address,
            token_id: token_id,
          });
          console.log(
            `list token id ${token_id} and price ${price} finalized!`
          );
          resolve(true);
        }
      })
      .catch((e) => {
        console.log("e", e);
        reject(e); // Reject the promise with the error
      });
  });
};

module.exports = {
  setMarketplaceContract,
  seMarketplaceAbiContract,
  list,
};
