const web3 = require('./web3');
const Healthcare = require('./build/buildHealthcare/Healthcare.json');
const { addressEIP20 } = require('./addressConfig.json');

const deployHealthcare = async () => {
    console.log('Inside deploy()');
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying the Healthcare contract from account ', accounts[0]);
    
    const result = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(Healthcare.abi))
    ).deploy({ data: Healthcare.evm.bytecode.object, arguments: [addressEIP20] })
    .send({from: accounts[0]});

    console.log('Deployed to address ',result.options.address); 
    // Rinkeby-
}

deployHealthcare();