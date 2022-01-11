const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const { interface, bytecode } = require("./compile");
require('dotenv').config()

const provider = new HDWalletProvider(
    process.env.MNEMONIC_KEY,
    process.env.INFURA_URL
);

const web3 = new Web3(provider);

const deploy = async () => {
    const accounts = await web3.eth.getAccounts();
    console.log("Attempting to deploy from account", accounts[0]);
    const result = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode }).send({ from: accounts[0], gas: "1000000" });
    console.log("Contract deployed to", result.options.address);
    provider.engine.stop();
}

deploy()