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

const setNftContract = (api, data, contract_address) => {
  contract = new ContractPromise(api, data?.CONTRACT_ABI, contract_address);
};

const setNftAbiContract = (data) => {
  abi_contract = new Abi(data.CONTRACT_ABI);
};

const approval = async (operator_address, token_id, is_approve) => {
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

const getOwnerAddressByTokenId = async function (token_id) {
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
  getOwnerAddressByTokenId,
  setNftContract,
  setNftAbiContract,
  approval,
};
