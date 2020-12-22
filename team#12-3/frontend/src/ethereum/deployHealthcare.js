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
    // 0x2a39265BfaDd7aBa09F7860c4C37Ae5Df708ec0D
    // 0xc39ECf511A8Cfc904aB167247E6E5cAe0cD75299
}

deployHealthcare();