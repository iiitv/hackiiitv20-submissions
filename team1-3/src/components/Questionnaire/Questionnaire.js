import React, { Component } from 'react'
import {Form,Button } from 'react-bootstrap'

//This questionnaire is for the patient to fill and doctors to detect
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
    myChangeHandler = (event) => {
        let prob = event.target.problem;
        let val = event.target.value;
        let symptom = event.target.symptoms;
        let previous = event.target.previous;
        this.setState({[prob]: val});  
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
        <form onSubmit={()=>this.onSubmitHandler(obj)}>

        
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={(e)=> obj.age = e.target.value}
        />
        <p>Enter your symptoms:</p>
        <input
          type='text'
          name='symptoms'
          onChange={(e)=> obj.symptoms = e.target.value}
        />
        <p>Desciption of your problem:</p>
        <input
          type='text'
          name='problem'
          onChange={(e)=> obj.problem = e.target.value}
        />
        <p>Enter details of any previous history of related problems:</p>
        <input
          type='text'
          name='previous'
          onChange={(e)=> obj.previous = e.target.value}
        />
        
        </form>
//         <Form>
//   <Form.Group controlId="formBasicEmail">
//     <Form.Label>Email address</Form.Label>
//     <Form.Control type="email" placeholder="Enter email" />
//     <Form.Text className="text-muted">
//       We'll never share your email with anyone else.
//     </Form.Text>
//   </Form.Group>

//   <Form.Group controlId="formBasicPassword">
//     <Form.Label>Password</Form.Label>
//     <Form.Control type="password" placeholder="Password" />
//   </Form.Group>
//   <Form.Group controlId="formBasicCheckbox">
//     <Form.Check type="checkbox" label="Check me out" />
//   </Form.Group>
//   <Button variant="primary" type="submit">
//     Submit
//   </Button>
// </Form>

        //take problem, past, diagnosis etc
        );
    }
}
  
// ReactDOM.render(<Questionnaire />, document.getElementById('root'));


export default Questionnaire
