import React, { Component } from 'react';
import axios from 'axios';
import Joi from 'joi-browser';
import { Link } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

class BloodDonationSlot extends Component {
    state = { 
        request: '',
        user: '',
        slot: {
            date: '',
            time: ''
        },
        error: {},
    }

    async componentDidMount() {
        try {
            const request = await axios.get(`http://localhost:9000/api/bloodDonation/getRequest/${this.props.match.params.id}`);
            const user = await axios.get(`http://localhost:9000/api/user/${request.data.userId}`);
            console.log(request.data);
            this.setState({request: request.data, user: user.data})
        } catch (error) {
            console.log(error);
        }
    }

    schema = {
        date: Joi.date().min('now').required().label('Date'),
        time: Joi.string().required().label('Time')
    }

    validate = () => {
        console.log("validate form");
        const { error } = Joi.validate(this.state.slot, this.schema);
        if(!error) 
            return null;
        console.log(error);

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
        const {error} = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
    }

    onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        const error = { ...this.state.error };
        const errorMessage = this.validateProperty(name,value);
        if (errorMessage) error[name] = errorMessage;
        else delete error[name];

        const slot = {...this.state.slot};
        slot[name] = value;
        this.setState({ slot, error });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        console.log("handling form");

        const errors = this.validate();
        this.setState({error : errors || {}});
        if(errors)
            return;
        this.doSubmit();
    }

    doSubmit = async () => {
        this.setState({ loading: true, disabled: true });
        try {
            console.log("submitting form");
            const obj = {
                _id: this.props.match.params.id,
                date: this.state.slot.date,
                time: this.state.slot.time
            };
            const requests = await axios.post("http://localhost:9000/api/bloodDonation/fixSlot", obj);
            this.setState({ disabled: true });
            this.props.history.push("/doctor/bloodDonations");
        } catch (error) {
            console.log('error----',error.response);
        }
    }

    render() { 
        return ( 
            <React.Fragment>
                <div className="alert alert-warning mx-auto mt-3" style={{width: '60%', fontWeight: 'bolder', fontSize: '15px', fontFamily: 'Goldman'}}>
                    <div className='row'>
                        <div className="col-lg-6">
                            <span className='text-danger'>Name : </span>
                            <span className='text-dark'>{this.state.user.name}</span>
                        </div>
                        <div className="col-lg-6">
                            <span className='text-danger'>Date of Birth : </span>
                            <span className='text-dark'>{this.state.user.dob}</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-6">
                            <span className='text-danger'>Email : </span>
                            <span className='text-dark'>{this.state.user.email}</span>
                        </div>
                        <div className="col-lg-6">
                            <span className='text-danger'>Last Blood Donation Date : </span>
                            <span className='text-dark'>
                                {this.state.user.lastBloodDonationDate ? this.state.user.lastBloodDonationDate : "(Donating first time)"}
                            </span>
                        </div>
                        
                    </div>
                    { this.state.request.appointmentTime ? 
                    <div>
                        <div className='row'>
                            <div className="col-lg-6">
                                <span className='text-danger'>Appointment Date : </span>
                                <span className='text-dark'>{this.state.request.appointmentDate}</span>
                            </div>
                            <div className="col-lg-6">
                                <span className='text-danger'>Appointment Time : </span>
                                <span className='text-dark'>{this.state.request.appointmentTime}</span>
                            </div>
                        </div>
                        <div className='row mt-2'>
                            <div className="mx-auto">
                                <Button color="blue">Blood Donated</Button>
                            </div>
                        </div>
                    </div>
                    : null}
                </div>
                { this.state.request.appointmentTime ? 
                null :
                <div className='pb-4'>
                    <div className="my-5 mx-auto" style={{width: '40vw', fontFamily: 'Goldman', border: '3px solid rgb(243,9,212)', boxShadow: '5px 5px 15px rgb(243,9,212)', background: 'linear-gradient(to right bottom, rgba(104,177,249,0.9), rgba(243,9,212,0.9))' }}>
                        <h3 className="text-center my-3" style={{fontFamily: 'Goldman'}}>Provide Time Slot</h3>
                        <hr className="w-25 mx-auto text-dark font-weight-bolder" />
                        {/* <div className="text-center my-4">
                            <NewQuizSvg width='130px' />
                        </div> */}
                        <form onSubmit={this.handleSubmit} className="px-3"> 
                            <div className='row'>
                                <div className="form-group my-2 col-lg-6">
                                    <label>Date</label>
                                    <input name="date" type="Date" className="form-control" style={{fontFamily: 'Goldman'}} id="date" value={this.state.slot.date} onChange={this.onChange}/>
                                    {this.state.error.date && <div className="my-2" style={{color: 'cyan'}}>{this.state.error.date}</div>}
                                </div>
                                <div className="form-group my-2 col-lg-6">
                                    <label>Time</label>
                                    <input name="time" type="time" className="form-control" style={{fontFamily: 'Goldman'}} id="time" value={this.state.slot.time} onChange={this.onChange}/>
                                    {this.state.error.time && <div className="my-2" style={{color: 'cyan'}}>{this.state.error.time}</div>}
                                </div>
                            </div>
                            <div className="text-center">
                                <Button type="submit" color='green' className="px-2 font-weight-light">Confirm</Button>
                                <Link to='/doctor/bloodDonations'>
                                    <button type="reset" className="btn btn-dark border-2 mx-2 my-3">Cancel</button>
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
                }
            </React.Fragment>
         );
    }
}
 
export default BloodDonationSlot;