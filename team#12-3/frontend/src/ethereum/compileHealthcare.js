const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build','buildHealthcare');
fs.removeSync(buildPath);

const healthcarePath = path.resolve(__dirname, 'contracts', 'Healthcare.sol');
const source = fs.readFileSync(healthcarePath, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
      'Healthcare.sol' : {
          content: source
      }
  },
  settings: {
      outputSelection: {
          '*': {
              '*': [ '*' ]
          }
      }
  }
}; 
let compiledContract = JSON.parse(solc.compile(JSON.stringify(input)));

fs.ensureDirSync(buildPath);

for(let contract in compiledContract.contracts['Healthcare.sol']) {
    fs.outputJsonSync(
      path.resolve(buildPath, contract.replace(':', '') + '.json'),
      compiledContract.contracts['Healthcare.sol'][contract]
    );
  }

