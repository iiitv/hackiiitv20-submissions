import React from 'react';
// import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './registration.css';

function Registration() {
  return (
    <>
      <h1 className="heading">Welcome to Ereca</h1>
      <div className="row">
        <input type="text" name="fname" placeholder="Enter First Name" />
      </div>
      <div className="row">
        <input type="text" name="lname" placeholder="Enter Last Name"></input>
      </div>
      <div className="row">
        <input type="email" name="email" placeholder="Enter Email"></input>
      </div>
      <div className="row">
        <input
          type="password"
          name="password"
          placeholder="Enter your password"
        ></input>
      </div>
      <div className="row">
        <input
          type="text"
          name="address"
          placeholder="Enter your address"
        ></input>
      </div>
      <div className="row1">
        <div>
          <label for="country">country</label>
          <br></br>
          <select id="country" name="countrychoose" required>
            <option value="">Choose...</option>
            <option>India</option>
          </select>
        </div>
        <div>
          <label for="state">State</label>
          <br></br>
          <select id="state" name="statechoose" required>
            <option value="">Choose...</option>
            <option>Haryana</option>
          </select>
        </div>
        <div>
          <label for="zip">Zip Code</label>
          <br></br>
          <textarea
            id="zip"
            rows="1"
            cols="6"
            name="zipcode"
            required
          ></textarea>
        </div>
      </div>
    </>
  );
}
export default Registration;
