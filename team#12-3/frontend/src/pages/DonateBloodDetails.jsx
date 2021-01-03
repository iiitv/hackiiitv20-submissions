import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Button } from 'semantic-ui-react';

class DonateBloodDetails extends Component {
    state = { 
        doctor: '',
        user: '',
        disabled: false
     }

    async componentDidMount() {
        try {
            const { _id } = jwtDecode(localStorage.getItem('token'));
            const doctor = await axios.get(`http://localhost:9000/api/doctor/${this.props.match.params.id}`);
            const user = await axios.get(`http://localhost:9000/api/user/${_id}`);
            this.setState({ doctor: doctor.data, user: user.data, disabled: user.data.currentBloodDonationRequest });
        } catch (error) {
            console.log(error);
        }
    }

    donateBlood = async () => {
        console.log('Blood donated');
        try {
            const { _id } = jwtDecode(localStorage.getItem('token'));
            const obj1 = {
                _id,
                hospital: this.state.doctor.name
            }
            const obj2 = {
                hospitalId: this.props.match.params.id,
                userId: _id,
                userName: this.state.user.name
            }
            const updatedUser = await axios.post(`http://localhost:9000/api/user/donateBlood/${_id}`, obj1);
            const res = await axios.post(`http://localhost:9000/api/bloodDonation/new`, obj2);
            this.setState({ disabled: true });
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        const {name, email, contact, address, city} = this.state.doctor;
        return ( 
            <div className="container mt-2">
                <h2 className="text-danger">Hospital/Doctor Details</h2>
                <h4>Name : <span className="text-white">{name}</span></h4>
                <h4>Email : <span className="text-white">{email}</span></h4>
                <h4>Contact : <span className="text-white">{contact}</span></h4>
                <h4>Address : <span className="text-white">{address}, {city}</span></h4>
                <Button color='purple' onClick={this.donateBlood} disabled={this.state.disabled}>Donate Blood</Button>
            </div>
         );
    }
}
 
export default DonateBloodDetails;