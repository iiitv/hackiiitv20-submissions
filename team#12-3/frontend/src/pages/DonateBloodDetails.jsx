import React, { Component } from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';

class DonateBloodDetails extends Component {
    state = { 
        doctor: ''
     }

    async componentDidMount() {
        try {
            const doctor = await axios.get(`http://localhost:9000/api/doctor/${this.props.match.params.id}`);
            this.setState({ doctor: doctor.data });
        } catch (error) {
            console.log(error);
        }
    }

    donateBlood = () => {
        console.log('Blood donated');
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
                <Button color='purple' onClick={this.donateBlood}>Donate Blood</Button>
            </div>
         );
    }
}
 
export default DonateBloodDetails;