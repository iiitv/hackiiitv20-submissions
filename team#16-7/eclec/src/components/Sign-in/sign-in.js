import React, { Component } from 'react';
import "./sign-in.css"
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
  handleUsernameChange=(e)=>{
    this.setState({
      usrname:e.target.value
    })

  }
  handleEmail=(e)=>{
    this.setState({
      usremail:e.target.value
    })
  }
  handlePassword=(e)=>{
    this.setState({
      password:e.target.value
    })

  }
  
  render() {
    return (
      <div>
       <div className="signin__form">
       <img className=" logo__img" src="./Images/eclec.png"></img>
         <input className="login__in" type="text" placeholder="Enter your name" value={this.state.usrname} name="usrname" onChange={this.handleUsernameChange} />
         <input  className="login__in" type="email" placeholder="Enter your email" value={this.state.usremail} name="usremail" onChange={this.handleEmail} />
         <input  className="login__in" type="password" placeholder="Enter password" value={this.state.password} name="uspassword" onChange={this.handlePassword} />
         <NavLink exact activeClassName="current" to="/dashboard"><button className="submit__btn" type="submit">Submit</button></NavLink>
       </div>
      </div>
    );
  }
}

export default signin;
