let { decodeAddress, encodeAddress } = require("@polkadot/keyring");
let { hexToU8a, isHex, BN, BN_ONE } = require("@polkadot/util");
const XLSX = require("xlsx");
// const fs = require("fs");
require("dotenv").config();

module.exports.splitFileName = function (path) {
  return str.split("\\").pop().split("/").pop();
};

module.exports.isValidAddressPolkadotAddress = function (address) {
  try {
    encodeAddress(isHex(address) ? hexToU8a(address) : decodeAddress(address));

    return true;
  } catch (error) {
    //console.log(error);
    return false;
  }
};

module.exports.delay = function (timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

module.exports.todayFolder = function () {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1; //months = require(1-12
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  var hour = dateObj.getHours();

  return year + "/" + month + "/" + day + "/" + hour;
};

module.exports.convertTimeStampToNumber = function (timeStamp) {
  let endTimeString = timeStamp ? timeStamp.toString() : 0;
  let endTimeWithoutCommas = endTimeString
    ? endTimeString.replace(/\,/g, "")
    : "";
  return +new Date(parseInt(endTimeWithoutCommas));
};

// getEstimatedGas
const toContractAbiMessage = (contractPromise, message) => {
  const value = contractPromise.abi.messages.find((m) => m.method === message);

  if (!value) {
    const messages = contractPromise?.abi.messages
      .map((m) => m.method)
      .join(", ");

    const error = `"${message}" not found in metadata.spec.messages: [${messages}]`;
    console.error(error);

    return { ok: false, error };
  }

  return { ok: true, value };
};

// readOnlyGasLimit
module.exports.readOnlyGasLimit = function (contract) {
  if (!contract) {
    console.log("contract invalid...");
    return;
  }
  try {
    const ret = contract?.api?.registry?.createType("WeightV2", {
      refTime: new BN(1_000_000_000_000),
      proofSize: new BN(5_000_000_000_000).isub(BN_ONE),
    });

    return ret;
  } catch (error) {
    console.log("error", error);
  }
};

async function getGasLimit(
  api,
  userAddress,
  message,
  contract,
  options = {},
  args = []
) {
  const abiMessage = toContractAbiMessage(contract, message);

  if (!abiMessage.ok) return abiMessage;

  const { value, gasLimit, storageDepositLimit } = options;

  const { gasRequired } = await api.call.contractsApi.call(
    userAddress,
    contract.address,
    value ?? new BN(0),
    gasLimit ?? null,
    storageDepositLimit ?? null,
    abiMessage.value.toU8a(args)
  );

  return { ok: true, value: gasRequired };
}

module.exports.getEstimatedGas = async function (
  address,
  contract,
  value,
  queryName,
  ...args
) {
  let ret;
  try {
    const gasLimitResult = await getGasLimit(
      contract?.api,
      address,
      queryName,
      contract,
      { value },
      args
    );

    if (!gasLimitResult.ok) {
      console.log(queryName, "getEstimatedGas err", gasLimitResult.error);
      return;
    }

    ret = gasLimitResult?.value;
  } catch (error) {
    console.log("error fetchGas xx>>", error.message);
  }

  return ret;
};

module.exports.readXlsx = function (filePath) {
  // Replace 'path/to/your/excel/file.xlsx' with the actual path to your Excel file
  // Read the Excel file
  const workbook = XLSX.readFile(filePath);

  // Assume you want to read data from the first sheet
  const sheetName = workbook.SheetNames[0];
  const sheet = workbook.Sheets[sheetName];

  // Parse the sheet data into a JSON object
  const jsonData = XLSX.utils.sheet_to_json(sheet, { header: "A" });

  // Print the JSON data
  return jsonData;
};

module.exports.getImage = async function () {
  const imageOriginUrl =
    "https://bafybeib7epipduh7vlrskgtcvwd7yrort3qx2vdgs7aavxuvk2joix3xzu.ipfs.nftstorage.link/nft.png";
  const r = await fetch(imageOriginUrl);
  if (!r.ok) {
    throw new Error(`error fetching image: [${r.statusCode}]: ${r.status}`);
  }
  return r.blob();
};
