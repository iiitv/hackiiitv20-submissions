import React, { Component } from 'react';
import jwtDecode from 'jwt-decode';
import axios from 'axios';
import { Label } from 'semantic-ui-react';

class UserNotifications extends Component {
    state = { 
        bloodDonationRequest:'',
        doctor: ''
    }

    async componentDidMount() {
        try {
            const {_id} = jwtDecode(localStorage.getItem('token'));
            const bloodDonationRequest = await axios.get(`http://localhost:9000/api/bloodDonation/user/${_id}`); 
            const doctor = await axios.get(`http://localhost:9000/api/doctor/${bloodDonationRequest.data.hospitalId}`);
            console.log(bloodDonationRequest.data);
            this.setState({ bloodDonationRequest: bloodDonationRequest.data, doctor: doctor.data });
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        return ( 
            <div className="container my-4">
                {this.state.bloodDonationRequest ? 
                <Label className="mb-4" style={{fontSize: '15px', fontWeight: 'normal'}}>
                    <h4 className="text-primary font-weight-bold">Blood Donation Notification</h4>
                    <label style={{color: 'red'}}>Hospital/Doctor Name : </label>
                    <span> {this.state.doctor.name}</span>
                    <br/><br/>
                    <label style={{color: 'red'}}>Address :</label> 
                    <span> {this.state.doctor.address}, {this.state.doctor.city}</span>
                    <br/><br/>
                    <label style={{color: 'red'}}>Appointment Date : </label>
                    <span> {this.state.bloodDonationRequest.appointmentDate}</span>
                    <br/><br/>
                    <label style={{color: 'red'}}>Appointment Time : </label>
                    <span> {this.state.bloodDonationRequest.appointmentTime}</span>
                </Label>
                : <h4>No Notifications for Blood Donation</h4>
                }
            </div>
         );
    }
}
 
export default UserNotifications;