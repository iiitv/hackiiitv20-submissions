import React,{useState} from 'react'
import "./style.css";
function RightPart() {
    const [arr,setarr]=useState([{}]);
    const default1={
        name:"",
        min:"",
        max:"",
        power:""
    };
    const [options,setoptions]=useState(default1);
    function handleChange(event)
    {
        const name=event.target.name;
        const value=event.target.value;
        setoptions(
            (prevvalue)=>{
                return {...prevvalue,[name]:value};
            }
        );
    }
       function addMore(event)
    {
        event.preventDefault();
        setarr(
            (prevvalue)=>{
                return [...prevvalue,options];
            }
        );
        setoptions(()=>
        {
            return {...default1};
        }
        );
       

    }
    return (
        <div className="right">
        <h1>Enter details about your appliance</h1>
        <div class="input">
        <input type="text" placeholder="Enter appliance name" onChange={handleChange}  name="name" value={options.name} required />
        <input type="number" min="1" placeholder="Enter minimum hours" onChange={handleChange} name="min" value={options.min} required/>
        <input type="number" placeholder = "Enter maximum hours " onChange={handleChange} name="max" value={options.max} required/>
        <input type= "number" placeholder = "Enter Power usage(in Watt)" onChange={handleChange} name="power" value={options.power} required/> 
        </div>
        <button type="submit" onClick={addMore} className="btn">Add Appliance in list </button>    
        <table className="table">
            <tr className="row">
            <td>Appliance Name</td>
            <td>Minimum Hours</td>
            <td>Maximum Hours</td>
            <td>Power Usage(in Watt)</td>
            </tr>
            {
                arr.map((value,i)=>{
                    if(i!=0)
                    {    
                    return <tr className="row">
                        <td>{value.name}</td>
                        <td>{value.min}</td>
                        <td>{value.max}</td>
                        <td>{value.power}</td>
                    </tr>
                    }
                })
            }
        </table>
        </div>
    );
}

export default RightPart;
