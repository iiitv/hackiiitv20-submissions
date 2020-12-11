// import React, { Component } from 'react';
// import "./sign-in.css"
// import {NavLink} from "react-router-dom"
// class signin extends Component {
//   const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

//   const initialState = {
//       userInfo:{
//           email:'',
//           password:'',
//       },
//       errorMsg:'',
//       successMsg:'',
//   }

//   const [state,setState] = useState(initialState);

//   // On change input value (email & password)
//   const onChangeValue = (e) => {
//       setState({
//           ...state,
//           userInfo:{
//               ...state.userInfo,
//               [e.target.name]:e.target.value
//           }
//       });
//   }

//   // On Submit Login From
//   const submitForm = async (event) => {
//       event.preventDefault();
//       const data = await loginUser(state.userInfo);
//       if(data.success && data.token){
//           setState({
//               ...initialState,
//           });
//           localStorage.setItem('loginToken', data.token);
//           await isLoggedIn();
//       }
//       else{
//           setState({
//               ...state,
//               successMsg:'',
//               errorMsg:data.message
//           });
//       }
//   }

//   // Show Message on Error or Success
//   let successMsg = '';
//   let errorMsg = '';
//   if(state.errorMsg){
//       errorMsg = <div className="error-msg">{state.errorMsg}</div>;
//   }
//   if(state.successMsg){
//       successMsg = <div className="success-msg">{state.successMsg}</div>;
//   }
  
//   render() {
//     return (
//       // <div>
//       //  <div className="signin__form">
//       //  <img className=" logo__img" src="./Images/eclec.png"></img>
//       //    <input className="login__in" type="text" placeholder="Enter your name" value={this.state.usrname} name="usrname" onChange={this.handleUsernameChange} />
//       //    <input  className="login__in" type="email" placeholder="Enter your email" value={this.state.usremail} name="usremail" onChange={this.handleEmail} />
//       //    <input  className="login__in" type="password" placeholder="Enter password" value={this.state.password} name="uspassword" onChange={this.handlePassword} />
//       //    <NavLink exact activeClassName="current" to="/dashboard"><button className="submit__btn" type="submit">Submit</button></NavLink>
//       //  </div>
//       // </div>
//     );
//   }
// }

// export default signin;a
import "./sign-in.css"
import React, {useContext, useState} from 'react'
import {MyContext} from "../../contexts/MyContext"
import {NavLink} from "react-router-dom"

function Login(){

    const {toggleNav,loginUser,isLoggedIn} = useContext(MyContext);

    const initialState = {
        userInfo:{
            email:'',
            password:'',
        },
        errorMsg:'',
        successMsg:'',
    }

    const [state,setState] = useState(initialState);

    // On change input value (email & password)
    const onChangeValue = (e) => {
        setState({
            ...state,
            userInfo:{
                ...state.userInfo,
                [e.target.name]:e.target.value
            }
        });
    }

    // On Submit Login From
    const submitForm = async (event) => {
        event.preventDefault();
        const data = await loginUser(state.userInfo);
        if(data.success && data.token){
            setState({
                ...initialState,
            });
            localStorage.setItem('loginToken', data.token);
            await isLoggedIn();
        }
        else{
            setState({
                ...state,
                successMsg:'',
                errorMsg:data.message
            });
        }
    }

    // Show Message on Error or Success
    let successMsg = '';
    let errorMsg = '';
    if(state.errorMsg){
        errorMsg = <div className="error-msg">{state.errorMsg}</div>;
    }
    if(state.successMsg){
        successMsg = <div className="success-msg">{state.successMsg}</div>;
    }



    return(
        <div className="_loginRegister">
            <h1>Login</h1>
            <form  onSubmit={submitForm} noValidate>
                <div className="signin__form">
                     <img className=" logo__img" src="./Images/eclec.png"></img>
                    <input className="login__in" name="email" type="email" required placeholder="Enter your email" value={state.userInfo.email} onChange={onChangeValue} />
                    <input className="login__in" name="password" type="password" required placeholder="Enter your password" value={state.userInfo.password} onChange={onChangeValue} />
               
                {errorMsg}
                {successMsg}
                <NavLink exact activeClassName="current" to="/dashboard"><button className="submit__btn" type="submit">Submit</button></NavLink>
                </div>
            </form>
            <div className="_navBtn">
                <button  onClick={toggleNav}>Login</button>
            </div>
        </div>
    );
}

export default Login;