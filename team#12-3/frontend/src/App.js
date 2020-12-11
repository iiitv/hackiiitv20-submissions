import React from 'react';
//import logo from './logo.svg';
import './App.css';
import { Redirect, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/Navbar';
import UserRegistration from './pages/UserRegistration';
import DoctorRegistration from './pages/DoctorRegistration';
import Login from './pages/Login';
import DonateBloodHospitals from './pages/DonateBloodHospitals';
import Logout from './pages/Logout';
import ProtectedRoute from './utilities/ProtectedRoute';
import DonateBloodDetails from './pages/DonateBloodDetails';
import BloodDonationsDoctor from './pages/BloodDonationsDoctor';
import BloodDonationSlot from './pages/BloodDonationSlot';
import UserNotifications from './pages/UserNotifications';
import ReportDoctor from './pages/ReportDoctor';

function App(props) {
  return (
    <React.Fragment>
      <Navbar/>
      <Switch>
        <Route path="/home" component={Home} />
        <Route path="/userRegistration" component={UserRegistration} />
        <Route path="/doctorRegistration" component={DoctorRegistration} />
        <Route path="/login" component={Login} />
        <Route path="/logout" component={Logout} />
        <ProtectedRoute path="/user/donateBloodHospitals" component={DonateBloodHospitals} role="user" {...props} />
        <ProtectedRoute path="/user/donateBlood/:id" component={DonateBloodDetails} role="user" {...props} />
        <ProtectedRoute path="/user/notifications" component={UserNotifications} role="user" {...props} />
        <ProtectedRoute path="/user/reportDoctor" component={ReportDoctor} role="user" {...props} />
        <ProtectedRoute path="/doctor/bloodDonations/:id" component={BloodDonationSlot} role="doctor" {...props} />
        <ProtectedRoute path="/doctor/bloodDonations" component={BloodDonationsDoctor} role="doctor" {...props} />
        <Route path="/:path" component={NotFoundPage} />
        <Route path="/" component={Home} />
        <Redirect to='/:path' />
      </Switch>
    </React.Fragment>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
