import React, { Component } from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';
class index extends Component {
  render() {
    return (
      <div>
        <div className="mid__section">
          <div className="content">
            <h1 className="head">
            Measuring the energy consumption of Homes: using Arduino
            </h1>
            <h1 className="sub__head">
            💵💵 Let’s save some Bucks 💵💵{' '}
    
            </h1>
            <p className="pp">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris ni</p>        
          </div>
          <div className="img__holder">
            <img className="lady__img" src="./Images/lady.png"></img>
          </div>
        </div>
        <div class="footer">
        <footer>
        <p>💖 Made with Love 💖</p>
        <p>404_Brain_Not_Found</p>
        </footer>
         </div>
      </div>
    
      
    );
  }
}

export default index;
