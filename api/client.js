const axios = require("axios");
require("dotenv").config();
const { Buffer } = require("buffer");
const { create } = require("ipfs-http-client");

const baseURL = process.env.REACT_APP_API_BASE_URL;
const projectId = process.env.REACT_APP_IPFS_PROJECT_ID;
const projectKey = process.env.REACT_APP_IPFS_PROJECT_KEY;

const clientAPI = async (method, url, options) => {
  if (!options) options = {};
  let urlencodedOptions = new URLSearchParams(
    Object.entries(options)
  ).toString();

  const { data } = await axios({
    baseURL,
    url,
    method,
    data: urlencodedOptions,
    headers: {
      Accept: "*/*",
      "Content-Type": "application/x-www-form-urlencoded",
    },
  });

  if (method.toLowerCase() === "post") {
    if (data?.status === "OK") {
      return data?.ret;
    } else {
      return data?.message;
    }
  } else if (method.toLowerCase() === "get") {
    if (data?.status === "OK") {
      return data?.ret;
    } else if (data?.status === "FAILED") {
      return data?.message;
    } else return data;
  }
};

// new API client call
const client = async (
  method,
  url,
  options = {},
  baseURL = process.env.REACT_APP_API_BASE_URL
) => {
  const headers = {
    Accept: "*/*",
    "Content-Type": "application/x-www-form-urlencoded",
  };

  const urlencodedOptions = new URLSearchParams(
    Object.entries(options)
  ).toString();

  const { data } = await axios({
    baseURL,
    url,
    method,
    headers,
    data: urlencodedOptions,
  });

  if (data?.status === "FAILED") {
    console.log("error FAILED @ xx>>", url, data?.message);
  }

  return data;
};

const APICall = {
  askBeUpdateNftData: async (options) => {
    return await client("POST", "/updateNFT", options);
  },
};

// IPFS API client call
const authorization =
  "Basic " + Buffer.from(projectId + ":" + projectKey).toString("base64");

const ipfsClient = create({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
  headers: {
    authorization,
  },
});

module.exports = {
  clientAPI,
  APICall,
  ipfsClient,
};
