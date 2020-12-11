import React, { Component } from 'react';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {Link} from 'react-router-dom';
import {Table, Button} from 'semantic-ui-react';

class BloodDonationsDoctor extends Component {
    state = { 
        requests: []
    }

    async componentDidMount() {
        try {
            const { _id } = jwtDecode(localStorage.getItem('token'));
            const requests = await axios.get(`http://localhost:9000/api/bloodDonation/${_id}`);
            console.log(requests.data);
            this.setState({requests: requests.data})
        } catch (error) {
            console.log(error);
        }
    }

    renderQuestions = () => {
        const res = this.state.requests.map((item,index) => {
            console.log(item);
                return (
                    <Table.Row key={index}>
                        <Table.HeaderCell>{item.userName}</Table.HeaderCell>
                        <Table.HeaderCell>
                            <Button color="olive" size="tiny" >
                                <Link to={{
                                        pathname: `/admin/question/edit/${item._id}` ,
                                        state: {
                                            quizId: this.props.match.params.id ,
                                            item: item
                                        } }} className="text-white" >    
                                    Edit
                                </Link>
                            </Button>
                        </Table.HeaderCell>
                        <Table.HeaderCell>
                            <Button color="red" size="tiny" onClick={() => {this.deleteQuestion(item._id)}} disabled={ this.state.stage > 1 } >
                                Delete
                            </Button>
                        </Table.HeaderCell>
                    </Table.Row>
                )
            });
        return res;
    }

    render() { 
        return ( 
            <div className="container">
                { this.state.requests.length>0 ? (
                <Table celled selectable textAlign="center" verticalAlign="middle" unstackable className="font-weight-light" style={{background: 'linear-gradient(to right bottom, rgba(254,230,104,1), rgba(242,37,212,1))'}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell className="bg-dark text-white">Name</Table.HeaderCell>
                            <Table.HeaderCell className="bg-dark text-white">View</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>

                    <Table.Body>
                        {this.renderQuestions()}
                    </Table.Body>
                </Table>
                ) : (<h1>No Requests</h1>)}
            </div>
         );
    }
}
 
export default BloodDonationsDoctor;