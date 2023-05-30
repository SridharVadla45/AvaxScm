require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  networks: {
    hardhat: {
      chainId: 31337, // Specify the chain ID for the local Hardhat network
    },
  },
  solidity: {
    version: "0.8.18", // Specify the Solidity compiler version
  },
};
