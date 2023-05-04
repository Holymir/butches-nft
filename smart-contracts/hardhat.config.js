require("@nomicfoundation/hardhat-toolbox");

const { node_url, signerKey } = require('./utils/networks.js');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  etherscan: {
    apiKey: "J531BRU4FNGMNCD693FT6YS9TAM9TWS6QG",
  },
  networks: {
    sepolia: {
      url: node_url("sepolia"),
      accounts: [signerKey()]
    }
  }
};
