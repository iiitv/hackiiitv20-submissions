const web3 = require('./web3');
const buildEIP20 = require('./build/buildEIP20/EIP20.json');
const { addressEIP20 } = require('./addressConfig.json');

const instanceEIP20 = new web3.eth.Contract(
    JSON.parse(JSON.stringify(buildEIP20.abi)),
    addressEIP20
);

module.exports = instanceEIP20;