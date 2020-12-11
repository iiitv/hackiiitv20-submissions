import React, { Component } from 'react'

class index extends Component {
    render() {
        constructor(props) {
            super(props)
        
            this.state = {
                 applianceName = [],
                 applianceMin = [],
                 applianceMax = [],
                 applianceWatt = []
            }
        }
        handleApplianceName =(e)=>{
            this.setState(prevState=>({
                applianceName:[...prevState.applianceName , e.target.value]
            }))
        }
        handleMinimum=(e)=>{
            this.setState(prevState=({
                applianceMin:[...prevState.applianceMin,e.target.value]
            }))
        }
        handleMaximum=(e)=>{
            this.setState(prevState=({
                applianceMax:[...prevState.applianceMax,e.target.value]
            }))
        }
        handleMWatt=(e)=>{
            this.setState(prevState=({
                applianceWatt:[...prevState.applianceWatt,e.target.value]
            }))
        }
        
        return (
            <div>
            <input type="text" placeholder="enter appliance name" onChange={this.handleApplianceName} />
            <input type="number" min="1" placeholder="enter minimum hours" onChange={this.handleMinimum} />
            <input type="number" placeholder = "enter maximum hours" onChange={this.handleMaximum} />
            <input type= "number" placeholder = "enter watt usage" onChange={this.handleWatt} /> 
            <button type="submit" onClick={this.addMore} >Add more </button>   
            </div>
        )
    }
}

export default index
