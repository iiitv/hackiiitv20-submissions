const path = require('path');
const solc = require('solc');
const fs = require('fs-extra');

const buildPath = path.resolve(__dirname, 'build','buildEIP20');
fs.removeSync(buildPath);

const eip20Path = path.resolve(__dirname, 'contracts', 'EIP20.sol');
const source = fs.readFileSync(eip20Path, 'utf8');

var input = {
  language: 'Solidity',
  sources: {
      'EIP20.sol' : {
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

fs.outputJsonSync(
         path.resolve(buildPath, 'EIP20.json'),
         compiledContract.contracts['EIP20.sol']['EIP20']
);

// fs.writeFileSync(`${buildPath}\EIP20.json` , 
//   JSON.stringify(compiledContract.contracts['EIP20.sol']['EIP20']));
// const output = solc.compile(source,1).contracts[':EIP20'];

// fs.ensureDirSync(buildPath);

// for (let contract in output) {
//     fs.outputJsonSync(
//       path.resolve(buildPath, contract.replace(':', '') + '.json'),
//       output[contract]
//     );
//   }
