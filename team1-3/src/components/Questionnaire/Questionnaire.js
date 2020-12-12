import React, { Component } from "react";
// import "./App.css";
import HealthCare from "../../abis/HealthCare.json";
import Web3 from "web3";
import { Navbar, Nav, Button } from "react-bootstrap";
// import "./App.css";
// import Logo from "../assets/images.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ipfsClient = require("ipfs-http-client");
const ipfs = ipfsClient({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https"
});

toast.configure();
//This questionnaire is for the patient to fill and doctors to detect
class Questionnaire extends Component {
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    // await this.showAdmin();
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum);
      await window.ethereum.enable();
    } else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider);
    } else {
      window.alert("Non-Ethereum Browser detected! Please use Meta-Mask.");
    }
  }
  async loadBlockchainData() {
    const web3 = window.web3;
    //load current account
    const accounts = await web3.eth.getAccounts();
    this.setState({
      account: accounts[0]
    });
    console.log(accounts);

    // Netword ID
    const networkId = await web3.eth.net.getId();
    const networkData = HealthCare.networks[networkId];

    if (networkData) {
      const healthCare = web3.eth.Contract(HealthCare.abi, networkData.address);
      this.setState({
        healthCare
      });
    } else {
      window.alert(
        "HealthCare contract has not yet been deployed on the blockchain."
      );
    }

    // Address = Address of the User (from metamask)
    // ABI = Application Binary Interface (smart contract is stored as bytecode under specific address known as contract address. ABI accesses it)
  }
  constructor(props) {
    super(props);
    this.state = {
      // address: "",
      problem: "",
      age: "",
      symptoms: "",
      previous: "",
      showquestion: ""
    };
  }
  myChangeHandler = (event) => {
    let prob = event.target.problem;
    let val = event.target.value;
    let symptom = event.target.symptoms;
    let previous = event.target.previous;
    this.setState({ [prob]: val }); //add other variables here
  };

  submitQuestion = (e) => {
    e.preventDefault();
    this.setState({
      // address: "",
      problem: "",
      age: "",
      symptoms: "",
      previous: ""
    });
    this.state.healthCare.methods
      .writeQuestion(
        // this.state.address,
        this.state.age,
        this.state.symptoms,
        this.state.problem,
        this.state.previous
      )
      .send({ from: this.state.account });
      console.log(this.state.age);
      console.log(this.state.symptoms);
      console.log(this.state.problem);
      console.log(this.state.previous);
  };
  showQuestion = (e) => {
    e.preventDefault();
    this.setState({
      showquestion: ""
    });
    this.state.healthCare.methods
      .questions(this.state.showquestion)
      .call()
      .then(function (res) {
        // console.log(res);
        toast.success("Problem: " + res["1"], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined
        });
        toast.success("Symptom: " + res["2"]);
        toast.info("Previous: " + res["3"]);
        toast.info("Age: " + res["4"]);
      });
  }

  render() {
    return (
      <div>
      <form onSubmit={this.submitQuestion}>
        {/* <p>Patient's Address:</p>
        <input type="text" name="address" onChange={this.myChangeHandler} /> */}
        <p>Enter your age:</p>
        <input type="text" name="age" onChange={this.myChangeHandler} />
        <p>Enter your symptoms:</p>
        <input type="text" name="symptoms" onChange={this.myChangeHandler} />
        <p>Desciption of your problem:</p>
        <input type="text" name="problem" onChange={this.myChangeHandler} />
        <p>Enter details of any previous history of related problems:</p>
        <input type="text" name="previous" onChange={this.myChangeHandler} />
        <input type="submit" />
      </form>
        
        <form onSubmit={this.showQuestion}>
            <h3>Show Health Record Details</h3>
            <div class="form-group">
              Input:
              <input
                type="text"
                name="showquestion"
                class="form-control"
                placeholder="Enter Your Input*"
                // value={showquestion}
                onChange={this.changeHandler}
              />
            </div>
          </form>
        </div>
    );
  }
}
//take problem, past, diagnosis etc

// ReactDOM.render(<Questionnaire />, document.getElementById('root'));

export default Questionnaire;
