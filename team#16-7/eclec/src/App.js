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
    </div>
  );
}

export default App;
