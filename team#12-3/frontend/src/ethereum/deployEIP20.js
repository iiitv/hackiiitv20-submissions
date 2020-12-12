const web3 = require('./web3');
const EIP20 = require('./build/buildEIP20/EIP20.json');

const deployEIP20 = async () => {
    console.log('Inside deploy()');
    const accounts = await web3.eth.getAccounts();
    console.log('Deploying the EIP20 contract from account ', accounts[0]);
    
    const result = await new web3.eth.Contract(
        JSON.parse(JSON.stringify(EIP20.abi))
    ).deploy({ data: EIP20.evm.bytecode.object, arguments: [10000,'HealthCoin',0,'HC']})
    .send({from: accounts[0]});

    console.log('Deployed to address ',result.options.address); 
    // Rinkeby-
}

deployEIP20();