import React, { Component } from 'react';

class Logout extends Component {
    
    logout = () => {
        localStorage.removeItem('token');
        localStorage.removeItem('role');
        window.location = '/';
    }

    render() { 
        {this.logout()};
        return ( null );
    }
}
 
export default Logout;