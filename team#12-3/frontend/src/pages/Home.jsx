import React, { Component } from 'react';
import { Link } from 'react-router-dom'; 
import VerifyAuthentication from '../utilities/verifyAuthentication';

class Home extends Component {

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
        const { user, doctor } = this.state;

        return ( 
            <div className="container text-center text-white" style={{textAlign: 'center', fontFamily: 'Goldman', marginTop: '10%'}}>
                <p style={{ margin: '0', padding: '0', fontSize: '6vw', lineHeight: '1em', textShadow: '2px 2px 7px blue'}}>It's all about</p>
                <p style={{ margin: '0', padding:'0', fontSize: '6vw', lineHeight: '1em', textShadow: '2px 2px 7px blue'}}>Saving Lives</p>
                <p className="mt-2">Our mission is to save lives</p>
                <hr className="w-25 mx-auto" />
                { !user && !doctor && 
                <div>
                    <Link to="/userRegistration"><button className="btn btn-outline-warning mr-3" style={{fontWeight: 'bold', borderWidth: '2px'}}>Register</button></Link>
                    <Link to="/login"><button className="btn btn-outline-primary ml-2" style={{fontWeight: 'bold', borderWidth: '2px'}}>Login</button></Link>
                </div>
                }
            </div>

         );
    }
}
 
export default Home;