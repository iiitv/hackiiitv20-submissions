import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap'
import './ques.css'
import HealthCare from "../../abis/HealthCare.json";
import Web3 from "web3";
// import { Navbar, Nav, Button } from "react-bootstrap";
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
    constructor(props) {
        super(props);
        this.state = {
          problem: '',
          age: '',
          symptoms: '',
          previous: '',
          showquestion: ''
        };
    }
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
    changeHandler = (e) =>
    this.setState({
      [e.target.name]: e.target.value
    });
    onSubmitHandler = (object) => {
      this.submitQuestion(object)
      this.setState({
        problem:object.problem,
        age:object.age,
        symptoms:object.symptoms,
        previous:object.previous
      })
      
    }
    submitQuestion = (e) => {
      
      
      this.state.healthCare.methods
        .writeQuestion(
          // this.state.address,
          e.age,
          e.symptoms,
          e.problem,
          e.previous
        )
        .send({ from: this.state.account });
        console.log(e.age);
        console.log(e.symptoms);
        console.log(e.problem);
        console.log(e.previous);
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

      let obj = {
          problem: '',
          age: '',
          symptoms: '',
          previous: '',
          showquestion: ''
      }

        return (
        <div className="container">
          <center><h1>Consultation Form</h1></center>
          <br/>
          <br/>
          <Form onSubmit={()=>this.onSubmitHandler(obj)}>
          <Form.Group controlId="formGroupNumber">
            <Form.Label>Enter your age</Form.Label>
            <Form.Control onChange={(e)=>obj.age=e.target.value} type="text" placeholder="Enter age" />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Label>Enter your symptoms</Form.Label>
            <Form.Control onChange={(e)=>obj.symptoms=e.target.value} type="text" placeholder="Symptoms" />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Label>Description of your problems</Form.Label>
            <Form.Control onChange={(e)=>obj.problem=e.target.value} type="text" placeholder="Problems" />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Label>Enter details of any previous history of related problems:</Form.Label>
            <Form.Control onChange={(e)=>obj.previous=e.target.value} type="text" placeholder="Previous History" />
          </Form.Group>
          <Form.Group controlId="formGroupText">
            <Form.Label>High Blood Pressure</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>High Cholesterol</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Diabetes</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Bleeding disorder</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <br/>
          <br/>
          <center>
           
            <Button onClick={()=>this.onSubmitHandler(obj)} as="input" type="button" value="Submit" />{' '}</center>
        </Form>
        <Form onSubmit={this.showQuestion}>
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
              <input type = "submit" />
            </div>
          </Form>
        </div>
        //take problem, past, diagnosis etc
        );
    }
}
//take problem, past, diagnosis etc

// ReactDOM.render(<Questionnaire />, document.getElementById('root'));

export default Questionnaire;