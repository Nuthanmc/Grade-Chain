require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    // hardhat: {
    //   chainId: 1337,
    // },
    sepolia: {
      url: "https://rpc.ankr.com/eth_sepolia",
      accounts: [process.env.SEPOLIA_PRIVATE_KEY],
    }
  },
  paths: {
    artifacts: "./artifacts",
  },
};
