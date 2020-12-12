

import React,{useState} from "react";
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./registration.css";
import axios from "axios"
import { NavLink } from "react-router-dom";
function Registration()
{
    const obj={
        fname:"",
        lname:"",
        email:"",
        password:"",
        address:"",
        countrychoose:"",
        statechoose:"",
        zipcode:"",
    };
    const [state,handlestate]=useState(obj);
    function handleChange(event)
    {
        const value=event.target.value;
        const name=event.target.name;
     handlestate(
         (prevalue)=>
         {
             return {...prevalue,[name]:value};
         }
     )  
    }
    function handleSubmit()
    {
         const {fname,lname,email,password,address,statechoose} = state;
     //console.log(state);
     const details ={
         fname,lname,email,password,address,statechoose
     }
     console.log(state);
     console.log(details)
      axios
      .post('http://localhost:9000/Sign_up', details)
      .then(() => console.log('object passed'))
      .catch(err => {
        console.error(err);
      });

    }
return <div className="center">
    <img src="./Images/eclec.png" alt="logo" className="myimg"></img>
    {/* <div className="row">
        <input type="text" name="fname" placeholder="Enter First Name" value={state.fname} onChange={handleChange}/>
    </div>
    <div className="row">
        <input type="text" name="lname" placeholder="Enter Last Name" value={state.lname} onChange={handleChange}></input>
    </div>
    <div className="row">
        <input type="email" name="email" placeholder="Enter Email" value={state.email} onChange={handleChange}></input>
    </div>
    <div className="row">
        <input type="password" name="password" placeholder="Enter your password" value={state.password} onChange={handleChange}>
        </input>
    </div>
    <div className="row">
        <input type="text" name="address" placeholder="Enter your address" value={state.address} onChange={handleChange}>
        </input>
    </div>
    <div className="row">
    <input type="text" name="state" placeholder="Enter your state" value={state.state} onChange={handleChange}>
        </input>
    </div> */}
        <input type="text" name="fname" placeholder="Enter First Name" value={state.fname} onChange={handleChange} />
        <input type="text" name="lname" placeholder="Enter Last Name" value={state.lname} onChange={handleChange}></input>
        <input type="email" name="email" placeholder="Enter Email" value={state.email} onChange={handleChange}></input>
        <input type="password" name="password" placeholder="Enter your password" value={state.password} onChange={handleChange} />
        <input type="text" name="address" placeholder="Enter your address" value={state.address} onChange={handleChange} />
        <input type="text" name="state" placeholder="Enter your state" value={state.state} onChange={handleChange} />
        
   <NavLink exact activeClassName="current" to="/dashboard">  <button type="submit" onClick={handleSubmit} className="myButton">Submit</button></NavLink> 
    
</div>
}
export default Registration;

