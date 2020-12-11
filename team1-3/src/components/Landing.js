import React from 'react'
import 'react-router-dom'
import {BrowserRouter as Router,Route,Link} from 'react-router-dom'
import Questionnaire from './Questionnaire/Questionnaire'
import App from './App'
import './Landing.css'
import Home from './Home'


function Landing() {
    return (
        <Router>
            <Route path="/app" component={App}/>
            <Route path="/ques" component={Questionnaire}/>
            <Route exact path="/" component={Home}/>
            {/* <Home/> */}
        </Router>
    )
}

export default Landing
