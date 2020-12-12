const web3 = require('./web3');
const Healthcare = require('./build/buildHealthcare/Healthcare.json');
const { addressHealthcare } = require('./addressConfig.json');

const instanceHealthcare = new web3.eth.Contract(
    JSON.parse(JSON.stringify(Healthcare.abi)),
    addressHealthcare
);

module.exports = instanceHealthcare;