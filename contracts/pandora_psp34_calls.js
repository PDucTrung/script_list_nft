let { ContractPromise, Abi } = require("@polkadot/api-contract");
let { Keyring } = require("@polkadot/api");
let { ipfsClient, clientAPI, APICall } = require("../api/client");
let {
  readOnlyGasLimit,
  getEstimatedGas,
  isValidAddressPolkadotAddress,
  getImage,
} = require("../utils");

const { NFTStorage, File } = require("nft.storage");
const fs = require("fs");
const path = require("path");

require("dotenv").config();

let contract;
let abi_contract;

const NFT_STORAGE_TOKEN = process.env.NFT_STORAGE_API_KEY;
const client = new NFTStorage({ token: NFT_STORAGE_TOKEN });

const setPadoraNftContract = (api, data) => {
  contract = new ContractPromise(
    api,
    data?.CONTRACT_ABI,
    data?.CONTRACT_ADDRESS
  );
};

const setPandoraNftAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const multipleMintTicket = async (amounts) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "multipleMintTicket",
    { u64: amounts }
  );

  return new Promise((resolve, reject) => {
    contract.tx["multipleMintTicket"]({ gasLimit, value }, { u64: amounts })
      .signAndSend(keypair, async ({ status, dispatchError }) => {
        if (dispatchError) {
          if (dispatchError.isModule) {
            console.log(dispatchError);
          } else {
            console.log("dispatchError", dispatchError.toString());
          }
        }

        if (status.isInBlock) {
          console.log(`Mint ${amounts} ticket ...`);
        } else if (status.isFinalized) {
          console.log(`Mint ${amounts} ticket finalized`);
          resolve(amounts);
        }
      })
      .catch((e) => {
        console.log("multipleMintTicket ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const setMultipleAttributesNFT = async (collectionAddress, tokenID) => {
  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  const image = await getImage();
  const metadata = await client.store({
    name: `BETAZ TICKET ${tokenID}`,
    description: "BETAZ NFT pandora mode",
    image: image,
    attributes: [],
  });

  console.log({ metadata: metadata.data });
  if (!metadata) {
    console.log({ Err: "There is an error with metadata hash!" });
    return;
  }

  let attributes = [
    {
      name: "metadata",
      value: metadata?.ipnft,
    },
  ];

  let data = [];
  for (const attribute of attributes) {
    data.push([attribute.name.trim(), attribute.value.trim()]);
  }

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "psp34Traits::setMultipleAttributes",
    { u64: tokenID },
    data
  );

  return new Promise((resolve, reject) => {
    contract.tx["psp34Traits::setMultipleAttributes"](
      { gasLimit, value },
      { u64: tokenID },
      data
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
          console.log(`Set attributes ticket ${tokenID} ...`);
        } else if (status.isFinalized) {
          await APICall.askBeUpdateNftData({
            collection_address: collectionAddress?.toString(),
            token_id: tokenID,
          });

          console.log(`Set attributes ticket ${tokenID} finalized`);
          resolve(tokenID);
        }
      })
      .catch((e) => {
        console.log("multipleMintTicket ERROR", e);
        reject(e); // Reject the promise with the error
      });
  });
};

const nftImgIpfs = process.env.NFT_IMAGE_IPFS;
const nftName = process.env.NFT_NAME;
const nftDescription = process.env.NFT_DESCRIPTION;
const createMetadataJson = async (tokenID) => {
  const attributes = [];
  const metadataFolderPath = "./metadata";
  const jsonFileName = `${tokenID}.json`;
  const jsonFilePath = path.join(metadataFolderPath, jsonFileName);

  if (!fs.existsSync(metadataFolderPath)) {
    fs.mkdirSync(metadataFolderPath);
  }

  const jsonData = {
    name: `${nftName} #${tokenID}`,
    description: `${nftDescription}`,
    image: `ipfs://${nftImgIpfs}/${tokenID}.png`,
    attributes: attributes,
  };

  const jsonString = JSON.stringify(jsonData, null, 2);

  // Ghi dữ liệu vào tệp JSON
  fs.writeFileSync(jsonFilePath, jsonString);
};

const isOwner = async function (account) {
  if (!contract) {
    return null;
  }

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  try {
    const { result, output } = await contract.query["psp34Traits::getOwner"](
      keypair.address,
      {
        gasLimit,
        value,
      }
    );

    if (result.isOk) {
      return output.toHuman().Ok == account;
    }
  } catch (error) {
    console.log("@_@ ", "hasRole", " error >>", error.message);
  }

  return false;
};

const pandora_psp34_approval = async (
  operator_address,
  token_id,
  is_approve
) => {
  if (!contract || !isValidAddressPolkadotAddress(operator_address)) {
    console.log(`Contract or caller not valid!`);
  }

  let gasLimit;
  const value = 0;

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  gasLimit = await getEstimatedGas(
    keypair.address,
    contract,
    value,
    "psp34::approve",
    operator_address,
    { u64: token_id },
    is_approve
  );

  return new Promise((resolve, reject) => {
    contract.tx["psp34::approve"](
      { gasLimit, value },
      operator_address,
      { u64: token_id },
      is_approve
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
          console.log(
            `approving ${token_id} to contract ${operator_address} ...`
          );
        } else if (status.isFinalized) {
          console.log(
            `approving ${token_id} to contract ${operator_address} finalized!`
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

const pandora_psp34_getOwnerAddressByTokenId = async function (token_id) {
  if (!contract) {
    return null;
  }

  const keyring = new Keyring({ type: "sr25519" });
  const PHRASE = process.env.PHRASE;
  const keypair = keyring.createFromUri(PHRASE);

  const gasLimit = readOnlyGasLimit(contract);
  const value = 0;

  try {
    const { result, output } = await contract.query["psp34::ownerOf"](
      keypair.address,
      {
        gasLimit,
        value,
      },
      { u64: token_id }
    );

    if (result.isOk) {
      return output?.toHuman()?.Ok;
    }
  } catch (error) {
    console.log("@_@ ", "getOwnerAddressByTokenId", " error >>", error.message);
  }

  return null;
};

module.exports = {
  setPadoraNftContract,
  setPandoraNftAbiContract,
  multipleMintTicket,
  isOwner,
  pandora_psp34_approval,
  pandora_psp34_getOwnerAddressByTokenId,
  setMultipleAttributesNFT,
  createMetadataJson,
};
