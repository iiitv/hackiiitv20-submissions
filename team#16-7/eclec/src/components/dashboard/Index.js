import React, { Component } from 'react'
import Navbar from "../Navbar/Navbar"
import LeftSection from "../dashboard/leftpart/Leftpart"

class Index extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <LeftSection />
            </div>
        )
    }
}

export default Index
