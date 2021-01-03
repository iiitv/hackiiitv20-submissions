import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DoctorRegistration extends Component {
    state = { 
        doctor: {
            name: '',
            email: '',
            contact: '',
            address: '',
            city: '',
            password: ''
        },
        error: {}
    }

    schema = {
        name: Joi.string().required().label('Name'),
        email: Joi.string().email().required().label('Email'),
        contact: Joi.number().positive().required().label('Contact No.'),
        address: Joi.string().required().label('Address'),
        city: Joi.string().required().label('City'),
        password: Joi.string().required().label('Password')
    };

    validate = () => {
        const { error } = Joi.validate(this.state.doctor, this.schema, { abortEarly : false });
        if(!error)
            return;

        const errors = {};
        for(let item of error.details) 
            errors[item.path[0]] = item.message;
        return errors;
    }

    validateProperty = (name, value) => {
        const schema = {
            [name]: this.schema[name]
        }
        const obj = {
            [name]: value
        }
        const { error } = Joi.validate(obj, schema);
        return error? error.details[0].message : null;
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const error = {...this.state.error};
        const errorMessage = this.validateProperty(name, value);
        if(errorMessage)
            error[name] = errorMessage;
        else
            delete error[name];

        const doctor = {...this.state.doctor};
        doctor[name] = value;
        this.setState({ doctor, error });
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const errors = this.validate();
        this.setState({ error: errors || {} });
        if(errors)  return;
        this.doSubmit();
    }

    doSubmit = async () => {
        try {
            const response = await axios.post('http://localhost:9000/api/doctor/register', this.state.doctor);
            console.log('response---',response);
            toast.success("Registration Successful");
            const doctor = {
                name: '',
                email: '',
                contact: '',
                address: '',
                city: '',
                password: ''
            };
            this.setState({doctor});
        } catch (error) {
            console.log('error----',error.response);
            //const {data} = error.response;
            if(error.response && error.response.status === 400)
                toast.error("Email already registered!");
            if(error.response === undefined)
                toast.error("Unexpected Error");
        }
        
    }

    render() { 
        return ( 
            <div className="container">
                <ToastContainer />
                <h5 className="text-center">Hospital/Doctor Registration</h5>
                <div className="text-center">
                    {/* <Adddoctor width="120px" /> */}
                </div>
                <form className="mx-auto" style={{width: '350px'}} onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input name="name" type="text" className="form-control" id="exampleInputName1" value={this.state.doctor.name} onChange={this.onChange} />
                        {this.state.error.name && <div className="badge badge-danger my-2 p-2">{this.state.error.name}</div>}
                    </div>
                    <div className="form-group">
                        <label>Email address</label>
                        <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={this.state.doctor.email} onChange={this.onChange} />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                        {this.state.error.email && <div className="badge badge-danger my-2 p-2">{this.state.error.email}</div>}
                    </div>
                    <div className="form-group">
                        <label>Contact No.</label>
                        <input name="contact" type="number" min="0" className="form-control" id="exampleInputContact1" value={this.state.doctor.contact} onChange={this.onChange} />
                        {this.state.error.contact && <div className="badge badge-danger my-2 p-2">{this.state.error.contact}</div>}
                    </div>
                    <div className="form-group">
                        <label>Address</label>
                        <input name="address" type="text" className="form-control" id="exampleInputAddress1" value={this.state.doctor.address} onChange={this.onChange} />
                        {this.state.error.address && <div className="badge badge-danger my-2 p-2">{this.state.error.address}</div>}
                    </div>
                    <div className="form-group">
                        <label>City</label>
                        <input name="city" type="text" className="form-control" id="exampleInputCity1" value={this.state.doctor.city} onChange={this.onChange} />
                        {this.state.error.city && <div className="badge badge-danger my-2 p-2">{this.state.error.city}</div>}
                    </div>
                    <div className="form-group">
                        <label>Password</label>
                        <input name="password" type="password" className="form-control" id="exampleInputPassword1" value={this.state.doctor.password} onChange={this.onChange}/>
                        {this.state.error.password && <div className="badge badge-danger my-2 p-2">{this.state.error.password}</div>}
                    </div>
                    
                    <button type="submit" className="btn btn-primary my-2">Submit</button>
                </form>
            </div>
         );
    }
}
 
export default DoctorRegistration;