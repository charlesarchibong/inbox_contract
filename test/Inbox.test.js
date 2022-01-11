const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const { interface, bytecode } = require('../compile');
const web3 = new Web3(ganache.provider());

let accounts;
let inbox;
beforeEach(async () => {
    //Get a list of all accounts and use one of it to deploy the contract
    accounts = await web3.eth.getAccounts();
    inbox = await new web3.eth.Contract(JSON.parse(interface)).deploy({ data: bytecode }).send(
        {
            from: accounts[0],
            gas: '1000000'
        }
    )
});

describe(
    'Inbox', () => {
        it('deploys a contract', () => {
            assert.ok(inbox.options.address);
        });

        it('can change the message', async () => {
            await inbox.methods.setMessage('Hello World from testing').send({ from: accounts[0] });
            const message = await inbox.methods.message().call();
            assert.equal(message, 'Hello World from testing');

        })
    }
)

