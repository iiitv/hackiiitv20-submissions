<<<<<<< HEAD

import React from "react";
import "./components/Registration/Registration";
import Registration from "./components/Registration/Registration";

function App() {
  return (
    <div className="App">
    <Registration />
=======
import React from "react"
import Home from "./components/home"
import {BrowserRouter,Route,Switch} from 'react-router-dom'
// import Login from "./components/Sign-in/"
function App() {
  return (
    <div className="App">
     <BrowserRouter>
            <div>
               <Switch>
                   <Route exact path='/' component={Home} />
                   {/* <Route path='/login' component={Login} />   
                   <Route path='/signup' component={Signup} /> */}
               </Switch>
            </div>
        </BrowserRouter>
>>>>>>> d7a005d0da1fb58ef354f191498afa838847b3d8
    </div>
  );
}

export default App;
