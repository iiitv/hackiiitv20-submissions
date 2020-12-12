import React from 'react'
import "./Leftpart.css";
import {NavLink} from "react-router-dom"
function Leftpart() {
    return (
        <div>
        <div className="left">
            
            <NavLink exact to ="/comparison"> <button className="compare__btn">Comparison</button></NavLink>
            <button className="leftComp"> Dummy2</button>
            <button className="leftComp">Dummy1</button>
            <button className="leftComp"> Dummy2</button>
            <button className="leftComp">Dummy1</button>
            <button className="leftComp"> Dummy2</button>    
        </div>
        </div>
    )
}

export default Leftpart;
