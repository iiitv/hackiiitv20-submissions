import React, { Component } from 'react';
import "./sign-in.css"
import axios from 'axios'
import {NavLink} from "react-router-dom"
class signin extends Component {
constructor(props) {
    super(props)

    this.state = {
         usrname:"",
         usremail:"",
         password:""
    }
  
}
handleChange=(e)=>{
    this.setState({
        [e.target.name]:e.target.value
    })
}
handleSubmit=()=>{
  const {usrname,usremail,password} = this.state;
  const details ={
      usrname,usremail,password
  }

  console.log(details)
   axios
   .post('http://localhost:9000/login', details)
   .then(() => console.log('object passed'))
   .catch(err => {
     console.error(err);
   });
}
  render() {
    return (
      <div>
       <div className="signin__form">
       <img className=" logo__img" src="./Images/eclec.png"></img>
         <input className="login__in" type="text" placeholder="Enter your name" value={this.state.usrname} name="usrname" onChange={this.handleChange} />
         <input  className="login__in" type="email" placeholder="Enter your email" value={this.state.usremail} name="usremail" onChange={this.handleChange} />
         <input  className="login__in" type="password" placeholder="Enter password" value={this.state.password} name="password" onChange={this.handleChange} />
         <NavLink exact activeClassName="current" to="/dashboard"><button className="submit__btn" onClick ={this.handleSubmit}type="submit">Submit</button></NavLink>
       </div>
      </div>
    );
  }
}

export default signin;
