let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let {
  getEstimatedGas,
  isValidAddressPolkadotAddress,
  readOnlyGasLimit,
} = require("../utils");
require("dotenv").config();

let contract;
let abi_contract;

const setCollectionManagerContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setCollectionManagerAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const getCollectionIsActive = async function (psp34_nft) {
  if (!contract) {
    return null;
  }

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query[
      "artZeroCollectionTrait::isActive"
    ](
      keypair.address,
      {
        gasLimit,
        value,
      },
      psp34_nft
    );

    if (result.isOk) {
      return output?.toHuman()?.Ok;
    }
  } catch (error) {
    console.log("@_@ ", "isActive", " error >>", error.message);
  }

  return null;
};

module.exports = {
  getCollectionIsActive,
  setCollectionManagerContract,
  setCollectionManagerAbiContract,
};
