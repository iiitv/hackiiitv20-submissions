import React, { Component } from 'react'

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
        <p>Enter your name:</p>
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
        );
    }
}
  
// ReactDOM.render(<Questionnaire />, document.getElementById('root'));


export default Questionnaire
