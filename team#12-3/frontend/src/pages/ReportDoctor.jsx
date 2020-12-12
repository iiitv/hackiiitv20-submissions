import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { Input } from 'semantic-ui-react';
import {ToastContainer, toast} from 'react-toastify';

class ReportDoctor extends Component {
    state = { 
        doctorList: [],
        report: {
            doctor: '',
            reason: ''
        }
    }

    async componentDidMount() {
        try {
            const doctorList = await axios.get("http://localhost:9000/api/doctor");
            this.setState({ doctorList: doctorList.data });
        } catch (error) {
            console.log(error);
        }
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const report = {...this.state.report};
        report[name] = value;
        this.setState({ report });
    }

    doSubmit = async (e) => {
        e.preventDefault();
        try {
            const {_id} = jwtDecode(localStorage.getItem('token'));
            const obj = {
                doctorName: this.state.report.doctor,
                userId: _id, 
                reason: this.state.report.reason
            };
            const response = await axios.post('http://localhost:9000/api/report/addReport', obj);
            toast.success("Hospital/Doctor Reported");
            const report = {
                doctor: '',
                reason: ''
            };
            this.setState({report});
        } catch (error) {
            console.log('error----',error.response);
            toast.error("Unexpected Error");
        }
        
    }

    render() { 
        return ( 
            <div className="container my-4">
                <ToastContainer/>
                <h2 className="text-center mb-4">Report Hospital/Doctor</h2>
    
                <form className="mx-auto" style={{width: '350px'}} onSubmit={this.doSubmit}>
                    <label>Hospital/Doctor</label>
                    <Input list='doctorList' className="w-100" placeholder='Choose doctor...' />
                        <datalist id='doctorList'>
                        {this.state.doctorList.map(doctor => {
                            return <option key={doctor.name} value={doctor.name}>{doctor.name}</option>
                        })}
                    </datalist>
                    <div className="form-group mt-3">
                        <label>Reason</label>
                        <textarea name="reason" type="text" className="form-control" id="reason" value={this.state.reason} onChange={this.onChange} />
                    </div>
                    
                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default ReportDoctor;