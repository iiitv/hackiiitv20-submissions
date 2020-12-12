/*
 * app.admin() -> to get the admin address
 * app.doctorCount() -> to get number of registered doctors
 * app.patientCount() -> to get number of patients
 * app.createDoctor("kalpan", {from: accounts[1]}) -> to create an unverified doctor
 * app.verifyDoctor(accounts[1], {from: accounts[0]}) -> verify the doctor (ADMIN ONLY)
 * app.createPatient(accounts[3], "john", {from: accounts[1]}) -> create a patient (DOCTOR ONLY)
 * app.writeNote(accounts[3], "wrong", "something wrong", {from: accounts[1]}) -> write record (DOCTOR ONLY)
 * app.HealthNoteCount() -> to get number of health records
 * app.doctors(accounts[1]) -> show doctor details
 * app.patients(accounts[3]) -> show patient details
 * call() -> read from blockchain
 * send() -> spill it onto the blockchain
 */
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import React, { Component } from "react";
import "./App.css";
import HealthCare from "../abis/HealthCare.json";
import Web3 from "web3";
import { Navbar, Nav, Button } from "react-bootstrap";
import "./App.css";
import Logo from "../assets/images.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const ipfsClient = require('ipfs-http-client')
const ipfs = ipfsClient({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })

toast.configure();

class App extends Component {
  //do this whenever this component will mount to the react-DOM
  async componentWillMount() {
    await this.loadWeb3();
    await this.loadBlockchainData();
    await this.showAdmin();
  }

  async showAdmin() {
    const admin = await this.state.healthCare.methods.admin().call();
    console.log(admin);
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
      account: accounts[0],
    });
    console.log(accounts);

    // Netword ID
    const networkId = await web3.eth.net.getId();
    const networkData = HealthCare.networks[networkId];

    if (networkData) {
      const healthCare = web3.eth.Contract(HealthCare.abi, networkData.address);
      this.setState({
        healthCare,
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
      buffer: null,
      account: "",
      healthCare: null,
      //1
      createDoctorname: "",
      //2
      verifyDoctoraddr: "",
      //3
      doctorDetailsaddr: "",
      //4
      patientDetailsaddr: "",
      //5
      createPatientname: "",
      createPatientaddr: "",
      //6
      writeNotepaddr: "",
      writeNotetitle: "",
      writeNotedesc: "",
      FileHash: "QmWvDDAa6pdVdfQ8KetxEG8jEd5CLSpKmqdzvMozwWgsMo",
      // QmPAraKFw2RVPrTpUybE7zzvQv6AbMuTJDMRrxaNZrfXkH
      //7
      showhealthNoteaddr: "",
    };
  }
  changeHandler = (e) =>
    this.setState({
      [e.target.name]: e.target.value,
    });

    captureFile = (e) => {
      e.preventDefault()
      console.log("file captured")

      const file = e.target.files[0]
      console.log(e.target.files)

      const reader = new window.FileReader()
      reader.readAsArrayBuffer(file)
      reader.onloadend =() => {
        this.setState({
          buffer: Buffer(reader.result),
        })
      }
      console.log('buffer', this.state.buffer)
    }

  dCount = () => {
    this.state.healthCare.methods
      .doctorCount()
      .call()
      .then(function(res) {
        toast.success("Number of verified doctor(s): " + res);
      });
  };

  pCount = () => {
    this.state.healthCare.methods
      .patientCount()
      .call()
      .then(function(res) {
        toast.success("Number of verified patient(s): " + res);
      });
  };

  noteCount = () => {
    this.state.healthCare.methods
      .HealthNoteCount()
      .call()
      .then(function(res) {
        toast.success("Number of Health Records given out: " + res);
      });
  };

  //1
  createDoctor = (e) => {
    e.preventDefault();
    this.setState({
      createDoctorname: "",
    });
    this.state.healthCare.methods
      .createDoctor(this.state.createDoctorname)
      .send({ from: this.state.account });
  };
  //2
  verifyDoctor = (e) => {
    e.preventDefault();
    this.setState({
      verifyDoctoraddr: "",
    });
    this.state.healthCare.methods
      .verifyDoctor(this.state.verifyDoctoraddr)
      .send({ from: this.state.account });
  };
  //3
  doctorDetails = (e) => {
    e.preventDefault();
    this.setState({
      doctorDetailsaddr: "",
    });
    this.state.healthCare.methods.doctors(this.state.doctorDetailsaddr).call();
  };
  //4
  patientDetails = (e) => {
    e.preventDefault();
    this.setState({
      patientDetailsaddr: "",
    });
    this.state.healthCare.methods
      .patients(this.state.patientDetailsaddr)
      .call();
  };
  //5
  createPatient = (e) => {
    e.preventDefault();
    this.setState({
      createPatientname: "",
      createPatientaddr: "",
    });
    this.state.healthCare.methods
      .createPatient(this.state.createPatientaddr, this.state.createPatientname)
      .send({ from: this.state.account });
  };
  //6
  writeNote = (e) => {
    e.preventDefault();
      ipfs.add(this.state.buffer, (error,result)=>{
      console.log('ipfs result', result)

      if(error){
        console.log(error)
        return
      }

      const FileHash = result[0].hash
      this.setState({FileHash})
      console.log(FileHash)
      // this.setState({
      //   writeFile: {FileHash}
      // })
      // this.setState({
      //   [e.target.writeFile]: FileHash
      // })

    })
    this.setState({
      writeNotepaddr: "",
      writeNotetitle: "",
      writeNotedesc: "",
      // FileHash: "",
    });
    
    console.log(this.state.FileHash)
    this.state.healthCare.methods
      .writeNote(
        this.state.writeNotepaddr,
        this.state.writeNotetitle,
        this.state.writeNotedesc,
        this.state.FileHash
      )
      .send({ from: this.state.account });
  };
  //7
  showhealthNote = (e) => {
    e.preventDefault();
    this.setState({
      showhealthNoteaddr: "",
    });
    this.state.healthCare.methods
      .healthNotes(this.state.showhealthNoteaddr)
      .call()
      .then(function(res) {
        // console.log(res);
        toast.success("Patient: " + res["1"], {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        toast.success("Doctor: " + res["2"]);
        toast.info("Title: " + res["3"]);
        toast.info("Description: " + res["4"]);

        const CustomToastWithLink = () => (
          <div>
            <a className="link" href={`https://ipfs.infura.io/ipfs/${res["5"]}`}> Link </a>
          </div>
        );
 
        // toast.info("Image Address: " + <a href ={`https://ipfs.infura.io/ipfs/${res["5"]}`}> Link </a>);
        console.log(`https://ipfs.infura.io/ipfs/${res["5"]}`);
        toast.info(CustomToastWithLink);
        
      });
  };

  render() {
    const {
      createDoctorname,
      verifyDoctoraddr,
      doctorDetailsaddr,
      patientDetailsaddr,
      createPatientname,
      createPatientaddr,
      writeNotepaddr,
      writeNotetitle,
      writeNotedesc,
      showhealthNoteaddr,
    } = this.state;
    return (
      <React.Fragment>
        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">Aztec-Lifeline
          </Navbar.Brand>
          <Nav className="mr-auto">
            <Nav.Link href="/">A Decentralized Smart Healthcare System</Nav.Link>
          </Nav>
          <Nav className="mr-sm-2 account-name">
            Current account : {this.state.account}
          </Nav>
        </Navbar>
        <br />
        <br />
        <br />
        {/* ADMIN SECTION */}
        <div className="text-center">
          <h1>Welcome to Aztec-Lifeline</h1>
          <img src={Logo} alt="logo" />
        </div>
        <br />
        <br />
        <div>
          <div className="container col-5 justify-content-center">
            <div className="text-center">
              <Button onClick={this.dCount} variant="success">
                Doctor Count
              </Button>{" "}
              <Button onClick={this.pCount} variant="success">
                Patient Count
              </Button>{" "}
              <Button onClick={this.noteCount} variant="success">
                Health Record Count
              </Button>{" "}
            </div>

            <br />
            <br />
            <br />
            {/* 2  */}
            <h1 className="text-center">Admin Section</h1>
            <form onSubmit={this.createDoctor}>
              <h3>CreateDoctor</h3>
              <div class="form-group">
                Doctor's Name:
                <input
                  type="text"
                  name="createDoctorname"
                  class="form-control"
                  placeholder="Enter Name*"
                  value={createDoctorname}
                  onChange={this.changeHandler}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>

            
            <form onSubmit={this.verifyDoctor}>
              <h3>VerifyDoctor</h3>
              <div class="form-group">
                Doctor's Address:
                <input
                  type="text"
                  name="verifyDoctoraddr"
                  class="form-control"
                  placeholder="Enter Address*"
                  value={verifyDoctoraddr}
                  onChange={this.changeHandler}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Verify
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />
            {/* 3 */}
            
          </div>
        </div>
        <br />
        <br />
        <br />
        {/* DOCTOR */}
        <div>
          <h1 className="text-center">Doctor Section</h1>
          <div className="container col-5 justify-content-center">
            <br />
            <br />
            <br />
            {/* 5  */}
            <form onSubmit={this.createPatient}>
              <h3>CreatePatient</h3>
              <div class="form-group">
                Patient's Name:
                <input
                  type="text"
                  class="form-control"
                  name="createPatientname"
                  placeholder="Enter Name*"
                  value={createPatientname}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="form-group">
                Patient's Address:
                <input
                  type="text"
                  name="createPatientaddr"
                  class="form-control"
                  placeholder="Enter Address*"
                  value={createPatientaddr}
                  onChange={this.changeHandler}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />

            {/* 6 */}
            <form onSubmit={this.writeNote}>
              <h3>Write Record</h3>
              <div class="form-group">
                Patient address:
                <input
                  type="text"
                  class="form-control"
                  name="writeNotepaddr"
                  placeholder="Enter Name*"
                  value={writeNotepaddr}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="form-group">
                Title:
                <input
                  type="text"
                  class="form-control"
                  name="writeNotetitle"
                  placeholder="Enter Title*"
                  value={writeNotetitle}
                  onChange={this.changeHandler}
                />
              </div>

              <div class="form-group">
                Description:
                <input
                  type="text"
                  class="form-control"
                  name="writeNotedesc"
                  placeholder="Description*"
                  value={writeNotedesc}
                  onChange={this.changeHandler}
                />
              </div>
              <div class="form-group">
                Add file:
                <input
                  type="file"
                  class="form-control"
                  name="writeFile"
                  placeholder="Add file*"
                  // value={writeFile}
                  onChange={this.captureFile}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Create
                </button>
              </div>
            </form>
            <br />
            <br />
            <br />
            <form onSubmit={this.showhealthNote}>
              <h3>Show Health Record Details</h3>
              <div class="form-group">
                Input:
                <input
                  type="text"
                  name="showhealthNoteaddr"
                  class="form-control"
                  placeholder="Enter Your Input*"
                  value={showhealthNoteaddr}
                  onChange={this.changeHandler}
                />
              </div>

              <div class="form-group">
                <button
                  class="btn btn-lg btn-primary btn-block text-uppercase"
                  type="submit"
                >
                  Check
                </button>
              </div>
            </form>
            <br />
            <br />
            <br /> 
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
