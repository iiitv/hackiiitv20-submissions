import React, { Component } from 'react';
import {Route, Redirect} from 'react-router-dom';
import jwtDecode from 'jwt-decode';

class ProtectedRoute extends Component {

    getRole = () => {
        try {
            const token = localStorage.getItem('token');
            const { role } = jwtDecode(token);
            return role;
        } catch (error) {
        }
    }

    render() { 
        const isAuthenticated = !(this.props.role).localeCompare(this.getRole());
        return isAuthenticated? 
            ( <Route path={this.props.path} component={this.props.component} /> ) :
            ( <Redirect to="/" /> ) ;           
         
    }
}
 
export default ProtectedRoute;


// const ProtectedRoute = ({path, component: Component, render, ...rest}) => {
//     return ( 
//         <Route {...rest} render={props => { 
//             console.log("props role---",props);
//             console.log("Component---",Component);
//             if(!((isAuthenticated()).localeCompare(props.role))) 
//                 return (<Redirect to={{
//                     pathname: "/",
//                     state: { from: props.location }
//                   }} />);
//             return Component? <Component {...props} /> :  render(props) } }  />
//      );
// }
 
// export default ProtectedRoute;