import { Button } from 'bootstrap';
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
    const [arr1,setarr1]=useState([{
        name:"",
        min:"",
        max:"",
        power:"",
        cost:""
    }]);
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
    //Currently algorithm is working on average values.
    function algorithmForPower(props)
    {
        var hrs=(props.min+props.max)/2;
        var power=props.power;
        //Currently expecting days to be 30,will definitely change for applianes which we don't use regularyly
        var days=0.03
        return days*power*hrs;
    }
    return (
        <div className="right">
        <div className="page">
        <h1>Enter details about your appliance</h1>
        <div class="input">
        <input type="text" placeholder="Ent
        er appliance name" onChange={handleChange}  name="name" value={options.name} required />
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
        <button type="submit" className="btn">Calculate</button>
        </div>
        <div className="page">
        <h1>Final Result is as follows</h1>
            {arr.map((value,i)=>{
                   

                   setarr1(
                       ()=>{
                           return [...arr];
                       }
                   );
                }
            )}
        </div>
        </div>
    );
}

export default RightPart;
