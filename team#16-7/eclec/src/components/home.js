import React, { Component } from 'react'
import FrontPage from "./frontPage/index"
import Navbar from "./Navbar/Navbar"

 class home extends Component {
    render() {
        return (
            <div>
            <Navbar />
            <FrontPage />
            </div>
        )
    }
}

export default home
