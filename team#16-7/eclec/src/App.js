
import React from "react"
import Home from "./components/home"
import Registration from "./components/Registration/Registration";
import {BrowserRouter,Route,Switch} from 'react-router-dom'
// import Login from "./components/Sign-in/"
import SignUp from "./components/Sign-in/sign-in"
function App() {
  return (
    <div className="App">
    <Registration />
     <BrowserRouter>
            <div>
               <Switch>
                   <Route exact path='/' component={Home} />
                    {/* <Route path='/login' component={Login} />    */}
                   <Route path='/Sign_up' component={SignUp} /> 
               </Switch>
            </div>
        </BrowserRouter>
    </div>
  );
}

export default App;
