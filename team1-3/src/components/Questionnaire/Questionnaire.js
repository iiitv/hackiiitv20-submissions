import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap'
import './ques.css'

class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          problem: '',
          age: '',
          symptoms: '',
          previous: '',
        };
    }
    

    onSubmitHandler = (object) => {
      this.setState({
        problem:object.problem,
        age:object.age,
        symptoms:object.symptoms,
        previous:object.previous
      })
    }
    render() {

      let obj = {
          problem: '',
          age: '',
          symptoms: '',
          previous: '',
      }

        return (
        <div className="container">
          <center><h1>Consultation Form</h1></center>
          <br/>
          <br/>
          <Form onSubmit={()=>this.onSubmitHandler(obj)}>
            
          <Form.Group controlId="formGroupEmail">
            <Form.Label>Enter your age</Form.Label>
            <Form.Control onChange={(e)=>obj.age=e.target.value} type="email" placeholder="Enter age" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Enter your symptoms</Form.Label>
            <Form.Control onChange={(e)=>obj.symptoms=e.target.value} type="password" placeholder="Symptoms" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Description of your problems</Form.Label>
            <Form.Control onChange={(e)=>obj.problem=e.target.value} type="password" placeholder="problem" />
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Enter details of any previous history of related problems:</Form.Label>
            <Form.Control onChange={(e)=>obj.previous=e.target.value} type="password" placeholder="Problems" />
          </Form.Group>
          <div>
            <Form.Group controlId="formGroupPassword">
            <Form.Label>High Blood Pressure</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
            </div>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>High Cholesterol</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Diabetes</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <Form.Group controlId="formGroupPassword">
            <Form.Label>Bleeding disorder</Form.Label>
            <Form.Check aria-label="option 1" label="Yes" />
            <Form.Check aria-label="option 2" label="No"/>
          </Form.Group>
          <br/>
          <br/>
          <center><Button onClick={()=>this.onSubmitHandler(obj)} as="input" type="button" value="Submit" />{' '}</center>
        </Form>
        </div>
        

        //take problem, past, diagnosis etc
        );
    }
}
  
// ReactDOM.render(<Questionnaire />, document.getElementById('root'));


export default Questionnaire
