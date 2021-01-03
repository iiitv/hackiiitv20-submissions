import React, { Component } from 'react';
import web3 from '../ethereum/web3';
import instanceEIP20 from '../ethereum/instanceEIP20';
import instanceHealthcare from '../ethereum/instanceHealthcare';
import { addressHealthcare } from '../ethereum/addressConfig.json';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import { ToastContainer, toast } from 'react-toastify';
import UserCoinsSvg from '../images/userCoins';

class UserCoins extends Component {
    state = {
        account: '', 
        balance: '',
        coins: '',
        loading2: false,
        disabled: false
     }

    async componentDidMount() {
        const accounts = await web3.eth.getAccounts();
        const balance = await instanceEIP20.methods.balanceOf(accounts[0]).call();
        this.setState({ account: accounts[0], balance });
    }

    onChange = (e) => {
        const val = e.target.value;
        this.setState({ coins: val });
    }

    convertCoinsToEther = async (e) => {
        e.preventDefault();
        this.setState({ loading2: true, disabled: true });
        try {
            await instanceEIP20.methods.convertCoinsToEther(this.state.coins).send({ from: this.state.account });
            const balance = parseInt(this.state.balance) - parseInt(this.state.coins);
            toast.success("Ethers transferred to your account successfully!");
            this.setState({ coins: '', balance, loading2: false, disabled: false });
        } catch (error) {
            console.log("error--",error);
            toast.error("Transaction Failed!");
            this.setState({ loading2: false, disabled: false });
        }
    }

    render() { 
        return (
            <div className="container text-center mt-4">
                <ToastContainer/>
                <div className="row mx-auto" style={{marginTop: '13vh', width: '600px',  boxShadow: '7px 7px 15px cyan'}}>
                    <div className="col-lg-4 bg-secondary p-2" style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <UserCoinsSvg width='100px' />
                    </div>
                    <div className="col-lg-8" style={{color: 'cyan', fontFamily: 'Goldman', background: 'linear-gradient(to right bottom, rgba(0,0,0,0.5), rgba(0,0,0,0.5))'}}>
                        <h3 className="mt-4 mb-0 pb-0" style={{ fontFamily: 'Goldman'}}>My HealthCoins</h3>
                        <hr className=" mx-auto w-25" />
                        <h4 className="mt-3">Account : {this.state.account}</h4>
                        <h4 className="m-3">Balance : {this.state.balance} HC</h4>
                        <form>
                            <div className="input-group mx-auto" style={{width: '93%'}}>
                                <input type="number" min="1" className="form-control font-weight-bold" style={{textAlign: 'center'}} value={this.state.coins} onChange={this.onChange} disabled={this.state.disabled} />
                                <div className="input-group-append">
                                    <span className="input-group-text"><strong>HC</strong></span>
                                </div>
                            </div>
                            <span>{this.state.coins? <h5 className='m-3'>Ether Value : {this.state.coins * 0.01} ethers </h5> : null }</span>
                        
                            <div className="row mt-3 mb-4">
                                <span className="mx-auto">
                                    <Button onClick={this.convertCoinsToEther} style={{fontWeight: 'normal'}} size="small" color="orange" inverted loading={this.state.loading2} disabled={this.state.disabled} >Convert to Ethers</Button>
                                </span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
          );
    }
}
 
export default UserCoins;