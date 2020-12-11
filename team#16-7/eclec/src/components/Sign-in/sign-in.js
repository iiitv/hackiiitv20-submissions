import React, { Component } from 'react';
import "./sign-in.css"
class signin extends Component {
  render() {
    return (
      <div>
       <div className="signin__form">
       <img className=" logo__img" src="./Images/eclec.png"></img>
         <input type="text" placeholder="Enter your name" name="usrname" />
         <input type="email" placeholder="Enter your email" name="usremail" />
         <input type="password" placeholder="Enter password" name="uspassword" />
         <button className="submit__btn" type="submit">Submit</button>
       </div>
      </div>
    );
  }
}

export default signin;
