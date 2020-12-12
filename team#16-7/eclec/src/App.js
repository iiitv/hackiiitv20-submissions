import React from "react"
import Home from "./components/home"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Login from "./components/Sign-in/sign-in"
import Registration from "./components/Registration/Registration"
import Dashboard from "./components/dashboard/Index"
import RightPart from "./components/dashboard/rightpart/RightPart"
import Compare from "./components/dashboard/rightpart/Ranking"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <div>
               <Switch>
                   <Route exact path='/' component={Home} />
                  <Route path='/login' component={Login} />    
                   <Route path='/Sign_up' component={Registration} />
                   <Route path="/dashboard" component={Dashboard} />
                   <Route path="/comparison" component={Compare} /> 
               </Switch>
            </div>

        </BrowserRouter>
    </div>
  );
}

export default App;
