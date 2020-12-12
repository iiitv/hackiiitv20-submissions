import React, { Component } from 'react'
import {NavLink} from "react-router-dom" 
import "./Navbar.css"

 class Navbar extends Component {
    render() {
        return (
            <div className="nav">

            <ul> 
            {/* <img  className="logo__img" src="./Images/eclec.png"></img> */}
            <h1 className="header">Eclec</h1>
          <NavLink exact activeClassName="current" to="/">
            <li>
              <button className="home__btn">Home</button>
            </li>
          </NavLink>
          <NavLink exact activeClassName="current" to="/Sign_up">
            <li>
              <button className="home__btn">Sign up</button>
            </li>
          </NavLink>
          <NavLink exact activeClassName="current" to="/login">
            <li>
              <button className="home__btn">Login</button>
            </li>
          </NavLink>
        </ul>
                
            </div>
        )
    }
}

export default Navbar
