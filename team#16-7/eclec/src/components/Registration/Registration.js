

// import React,{useState} from "react";
// // import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "./registration.css";
// function Registration()
// {
//     const obj={
//         fname:"",
//         lname:"",
//         email:"",
//         password:"",
//         address:"",
//         countrychoose:"",
//         statechoose:"",
//         zipcode:"",
//     };
//     const [state,handlestate]=useState(obj);
//     function handleChange(event)
//     {
//         const value=event.target.value;
//         const name=event.target.name;
//      handlestate(
//          (prevalue)=>
//          {
//              return {...prevalue,[name]:value};
//          }
//      )  
//     }
//     function handleSubmit()
//     {
//         console.log(state);
//     }
// return <div className="center">
//     <img src="./Images/eclec.png" alt="logo" className="myimg"></img>
//     <div className="row">
//         <input type="text" name="fname" placeholder="Enter First Name" value={state.fname} onChange={handleChange}/>
//     </div>
//     <div className="row">
//         <input type="text" name="lname" placeholder="Enter Last Name" value={state.lname}onChange={handleChange}></input>
//     </div>
//     <div className="row">
//         <input type="email" name="email" placeholder="Enter Email" value={state.email}onChange={handleChange}></input>
//     </div>
//     <div className="row">
//         <input type="password" name="password" placeholder="Enter your password" value={state.password}onChange={handleChange}>
//         </input>
//     </div>
//     <div className="row">
//         <input type="text" name="address" placeholder="Enter your address" value={state.address}onChange={handleChange}>
//         </input>
//     </div>
//     <div className="row1">
//     <div >
//     <label for="country">country</label><br></br>
//        <select id="country" name="countrychoose" required onChange={handleChange}>
//            <option>Choose...</option>
//            <option value="India">India</option>
//        </select>
//     </div>
//     <div >
//     <label for="state">State</label><br></br>
//        <select id="state" name="statechoose"required>
//            <option value="Choose...">Choose...</option>
//            <option value="Haryana">Haryana</option>
//        </select>
//     </div>
//     <div >
//         <label for="zip">Zip Code</label><br></br>
//         <textarea id="zip" rows="1" cols="6" name="zipcode" required value={state.zipcode}onChange={handleChange}>
//         </textarea> 
//     </div>
//     </div>
//     <button type="submit" onClick={handleSubmit} className="btn">Submit</button>
    
// </div>
// }
// export default Registration;




// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./registration.css";
import React, {useContext, useState} from 'react'
import {MyContext} from '../../contexts/MyContext'

function Registration()
{
    const {toggleNav,registerUser} = useContext(MyContext);
    const initialState = {
        userInfo:{
            fname:'',
            lname:'',
            email:'',
            password:'',
            address:'',
            resState:'',
            

        },
        errorMsg:'',
        successMsg:'',
    }
    const [state,setState] = useState(initialState);

    // On Submit the Registration Form
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await registerUser(state.userInfo);
        if(data.success){
            setState({
                ...initialState,
                successMsg:data.message,
            });
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // On change the Input Value (name, email, password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }
    
    // Show Message on Success or Error
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }

return <div className="center">

    <img src="./Images/eclec.png" alt="logo" className="myimg"></img>
    <form onSubmit={submitForm} noValidate>
    <div className="row">
        <input type="text" name="fname" value={state.userInfo.fname} onChange={onChangeValue} placeholder="Enter First Name"  />
    </div>
    <div className="row">
        <input type="text" name="lname" value={state.userInfo.lname} onChange={onChangeValue} placeholder="Enter Last Name" ></input>
    </div>
    <div className="row">
        <input type="email" name="email" value={state.userInfo.email} onChange={onChangeValue} placeholder="Enter Email" ></input>
    </div>
    <div className="row">
        <input type="password" name="password" value={state.userInfo.password} onChange={onChangeValue}  placeholder="Enter your password" >
        </input>
    </div>
    <div className="row">
        <input type="text" name="address" value={state.userInfo.address} onChange={onChangeValue} placeholder="Enter your address" >
        </input>
    </div>
    <div className="row">
        <input type="text" name="resState" value={state.userInfo.resState} onChange={onChangeValue} placeholder="Enter your address" >
        </input>
    </div>
    {errorMsg}
    {successMsg}
    <button type="submit" className="btn">Submit</button>
    </form>
    <div className="_navBtn">
                <button  onClick={toggleNav}>Login</button>
            </div>
</div>
}
export default Registration;
