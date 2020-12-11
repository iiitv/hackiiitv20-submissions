import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';

class BloodDonationsDoctor extends Component {
    state = { 
        requests: ''
    }

    async componentDidMount() {
        try {
            const { _id } = jwtDecode(localStorage.getItem('token'));
            const requests = await axios.get(`http://localhost:9000/api/bloodDonation/${_id}`);
            console.log(requests.data);
        } catch (error) {
            console.log(error);
        }
    }

    render() { 
        return ( 
            <div>Hello</div>
         );
    }
}
 
export default BloodDonationsDoctor;