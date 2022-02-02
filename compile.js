const path = require("path");
const fs = require("fs");
const solc = require("solc");

const inboxPath = path.resolve(__dirname, "contracts", "Inbox.sol");
const source = fs.readFileSync(inboxPath, "UTF-8");

// module.exports = solc.compile(source, 1).contracts[':Inbox'];

var complierInput = {
  language: "Solidity",
  sources: {
    "Inbox.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["*"],
      },
    },
  },
};

console.log("compiling contract...");
let compiledContract = JSON.parse(
  solc.compile(JSON.stringify(complierInput), 1)
);
console.log("Contract Compiled");

console.log(
  compiledContract.contracts["Inbox.sol"]["Inbox"].evm.bytecode.object
);

// module.exports = compiledContract.contracts["Inbox.sol"]["Inbox"];

// for (let contractName in compiledContract.contracts['Inbox.sol']) {
// console.log(compiledContract.contracts['Inbox.sol']['Inbox']);
// }

// console.log(JSON.parse(solc.compile(JSON.stringify(input.contract🇸['Inbox.sol']))));

// console.log(solc.compile(source, 1).contracts);
