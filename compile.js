const path = require('path');
const fs = require('fs');
const solc = require('solc');
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const inboxSource = fs.readFileSync(inboxPath, 'utf8');

module.exports = solc.compile(inboxSource, 1).contracts[':Inbox'];