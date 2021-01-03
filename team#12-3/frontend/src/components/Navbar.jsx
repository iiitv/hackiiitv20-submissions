import jwtDecode from 'jwt-decode';
import React, { Component } from 'react';
import {Link, NavLink} from 'react-router-dom';
import { Button, Icon } from 'semantic-ui-react';
import VerifyAuthentication from '../utilities/verifyAuthentication';
import Logo from '../images/mainLogo.svg';

class Navbar extends Component {
    state = { 
        doctor: '',
        user: ''
     }

    componentDidMount() {
        const doctor = VerifyAuthentication.isDoctorAuthenticated();
        const user = VerifyAuthentication.isUserAuthenticated();
        this.setState({ doctor, user });
    }

    render() { 

        const { doctor, user } = this.state;

        return ( 
            <nav className="navbar navbar-expand-lg navbar-dark text-white">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/" style={{fontSize: '35px', marginRight: '5vw'}}>
                        HelpingLives
                        <img src={Logo} width="60vw" />
                    </Link>
                    
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse ml-2" id="navbarNavAltMarkup">
                        <div className="navbar-nav">
                            <NavLink className="nav-link" aria-current="page" to="/home">Home</NavLink>
                            { !doctor && !user &&
                            <React.Fragment>
                                <NavLink className="nav-link" to="/login">Login</NavLink> 
                                <NavLink className="nav-link" to="/userRegistration">User Registration</NavLink>
                                <NavLink className="nav-link" to="/doctorRegistration">Doctor Registration</NavLink>
                            </React.Fragment> }
                            { doctor && 
                            <React.Fragment>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Donations
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/doctor/bloodDonations">Blood Donations</Link>
                                    <Link className="dropdown-item" to="/doctor/organDonations">Organ Donations</Link>
                                    </div>
                                </li>
                                <div className="d-flex justify-content-center" style={{position: 'fixed', right: '15px'}}>
                                    <div className="my-auto mr-2">Welcome {jwtDecode(localStorage.getItem('token')).email} </div>
                                    <NavLink className="nav-link" to="/logout">
                                        <Button inverted color="red"><Icon name="sign-out" />Logout</Button>
                                    </NavLink>
                                </div>
                            </React.Fragment> }
                            { user && 
                            <React.Fragment>
                                <li className="nav-item dropdown">
                                    <a className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Donate
                                    </a>
                                    <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <Link className="dropdown-item" to="/user/donateBloodHospitals">Donate Blood</Link>
                                    <Link className="dropdown-item" to="/user/donateOrganHospitals">Donate Organ</Link>
                                    </div>
                                </li>
                                <NavLink className="nav-link" to="/user/coins">My Coins</NavLink>
                                <NavLink className="nav-link" to="/user/reportDoctor">Report Doctor</NavLink>
                                <NavLink className="nav-link" to="/user/notifications">Notifications</NavLink>
                                <div className="d-flex justify-content-center" style={{position: 'absolute', right: '15px'}}>
                                    <div className="my-auto mr-2">Welcome {jwtDecode(localStorage.getItem('token')).email} </div>
                                    <NavLink className="nav-link" to="/logout">
                                        <Button inverted color="red"><Icon name="sign-out" />Logout</Button>
                                    </NavLink>
                                </div>
                                
                            </React.Fragment> }
                        </div>
                    </div>
                </div>
            </nav>
         );
    }
}
 
export default Navbar;