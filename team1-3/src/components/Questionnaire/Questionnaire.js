import React, { Component } from 'react'

//This questionnaire is for the patient to fill and doctors to detect
class Questionnaire extends Component {
    constructor(props) {
        super(props);
        this.state = {
          username: '',
          age: null,
        };
    }
    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        this.setState({[nam]: val});
    }
    render() {
        return (
        <form>
        <h1>Hello {this.state.username} {this.state.age}</h1>
        <p>Enter your nickname:</p>
        <input
          type='text'
          name='name'
          onChange={this.myChangeHandler}
        />
        <p>Enter your age:</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        </form>

        //take problem, past, diagnosis etc
        );
    }
}
  
// ReactDOM.render(<Questionnaire />, document.getElementById('root'));


export default Questionnaire
