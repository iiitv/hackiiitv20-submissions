import React, { Component } from 'react'

//This questionnaire is for the patient to fill and doctors to detect
class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          problem: '',
          age: null,
          symptoms: '',
          previous: '',
        };
    }
    myChangeHandler = (event) => {
        let prob = event.target.problem;
        let val = event.target.value;
        let symptom = event.target.symptoms;
        let previous = event.target.previous;
        this.setState({[prob]: val});  //add other variables here
    }
    render() {
        return (
        <form>
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        <p>Enter your symptoms:</p>
        <input
          type='text'
          name='symptoms'
          onChange={this.myChangeHandler}
        />
        <p>Desciption of your problem:</p>
        <input
          type='text'
          name='problem'
          onChange={this.myChangeHandler}
        />
        <p>Enter details of any previous history of related problems:</p>
        <input
          type='text'
          name='previous'
          onChange={this.myChangeHandler}
        />
        
        </form>

        //take problem, past, diagnosis etc
        );
    }
}
  
// ReactDOM.render(<Questionnaire />, document.getElementById('root'));


export default Questionnaire
