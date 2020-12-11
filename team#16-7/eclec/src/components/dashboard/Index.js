import React, { Component } from 'react'
import Navbar from "../Navbar/Navbar"
import LeftSection from "../dashboard/leftpart/Leftpart"
import RightSection from "../dashboard/rightpart/RightPart"
import "./style.css"

class Index extends Component {
    render() {
        return (
            <div>

            <Navbar />
            <div className="main">
            <div className="left__contain">
            <RightSection />
            </div>
            <div className="right__contain">
           
            <LeftSection />
            </div>
            </div>
           
           
            </div>
        )
    }
}

export default Index
