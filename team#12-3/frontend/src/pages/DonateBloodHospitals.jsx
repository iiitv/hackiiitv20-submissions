import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Icon } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import axios from 'axios';

class DonateBloodHospitals extends Component {

    state = { 
        doctorList: [],
        filteredDoctorList: [],
        search: ''
     }

    async componentDidMount() {
        try {
            const doctorList = await axios.get("http://localhost:9000/api/doctor");
            this.setState({ doctorList: doctorList.data, filteredDoctorList: doctorList.data });

        } catch (error) {
            console.log(error);
        }
    }

    renderDoctorList = () => {
        const list = this.state.filteredDoctorList.map((doctor,index) => {
            return (
                <div className="col-lg-4 my-3" key={index} >
                    <Card className="mx-auto">
                        <Card.Content key={doctor.name} header={doctor.name} />
                        <Card.Content key={doctor.address} description={doctor.address + ", " + doctor.city} />
                        <Card.Content key={index} extra>
                            <Link key='1' to={`/user/donateBlood/${doctor._id}`} >
                                <Button color='purple'>View</Button>
                            </Link>
                        </Card.Content>
                    </Card>
                </div>
            );
        });
        return list;
    }

    searchDoctor = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const filteredDoctorList = this.state.doctorList.filter( doctor => doctor.city.toLowerCase().indexOf(value.toLowerCase().trim())>=0);
        this.setState({ filteredDoctorList, search: value });
    }

    render() { 
        return ( 
            <div className="container mt-3">
                <div class="input-group mt-4">
                    <input className="form-control border-white" type='search' name='search' id='search' placeholder="Search by city" value={this.state.search} onChange={this.searchDoctor} autoComplete='off' />
                    <div class="input-group-append">
                        <span class="input-group-text bg-white border border-white"><Icon name='search' className="mb-1 ml-2" /></span>
                    </div>
                </div>
                
                {this.state.filteredDoctorList.length>0 ?
                    <div className="row mx-auto mt-3">
                        { this.state.doctorList.length? this.renderDoctorList() : <h1>No Hospitals/Doctors Available</h1>}
                    </div> : <h2>No Hospital/Doctor Found</h2>
                }
            </div>
         );
    }
}
 
export default DonateBloodHospitals;