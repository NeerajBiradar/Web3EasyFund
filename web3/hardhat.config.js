/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: {
    version: '0.8.9',
    defaultNetwork: 'Mumbai',
    networks: {
      hardhat: {},
      Polygon : {
        url: 'https://polygon-mumbai.g.alchemy.com/v2/8CuifaDvhfnrj9OaD15Q5weZD2IF6Yz8',
        accounts: [`0x${process.env.PRIVATE_KEY}`]
      }
    },
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};