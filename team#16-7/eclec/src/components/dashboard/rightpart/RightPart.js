import React,{useState} from 'react'
import "./style.css";
function RightPart() {
    const [arr,setarr]=useState([{}]);
    const default1={
        name:"",
        min:"",
        max:"",
        power:"",
        time:"",
        priority:""
    };
    const [options,setoptions]=useState(default1);
    const defaultOutput = {
        name:"",
        time:""
    }
    const [outputFormat,setoutputFormat] = useState(defaultOutput)
    const [output,setOutput] = useState([{}]);
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
    function handleOutput(){
        //avg of previous bills 
        var prevBillAvg = 546;
        var baseCharge = 45;
        //per day bill cost 
        var perDayCost = (prevBillAvg-baseCharge)/30;
        //energy consumption perday
        var perDayConsumptionUnits = (perDayCost/3);
        //unit = consumption/1000
        var perDayConsumption = perDayConsumptionUnits*1000;
        var AppliancesNo = arr.length;
        var firstBreak = AppliancesNo/3;
        var secondBreak = 2*firstBreak;
        arr.map((value,i)=>{
            if(i<firstBreak){
                value.time = ((value.min+value.max)/2)-10;
            }
            else if(i>firstBreak && i<secondBreak){
                value.time = ((value.min+value.max)/2)-20;
            }
            else{
                value.time = ((value.min+value.max)/2)-30;
            }
        })
        console.log(arr);

        var dis = document.getElementById('output__table');
        dis.style.display="block";
    }
    return (
        <div>
        <div className="right">
        <h1>Enter details about your appliance</h1>
        <div class="input">
        <input type="text" placeholder="Enter appliance name" onChange={handleChange}  name="name" value={options.name} required />
        <input type="number" min="1" placeholder="Enter minimum hours" onChange={handleChange} name="min" value={options.min} required/>
        <input type="number" placeholder = "Enter maximum hours " onChange={handleChange} name="max" value={options.max} required/>
        <input type= "number" placeholder = "Enter Power usage(in Watt)" onChange={handleChange} name="power" value={options.power} required/> 
        <input type= "number" placeholder = "Enter usage priority" onChange={handleChange} name="priority" value={options.priority} required/> 
        </div>
        <button type="submit" onClick={addMore} className="btn">Add Appliance in list </button>    
        <table className="table">
            <tr className="row">
            <th>Appliance Name</th>
            <th>Minimum Hours</th>
            <th>Maximum Hours</th>
            <th>Power Usage(in Watt)</th>
            <th>Usage priority</th>
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
                        <td>{value.priority}</td>
                    </tr>
                    }
                })
            }
        </table>
        <button type="submit" className="output__btn" onClick={handleOutput}>Get output </button>
        <div className="output__table" id="output__table">
        <tr className="row">
            <th>Appliance Name</th>
            <th>Usable amount of time</th>
            </tr>
         {
             arr.map((value,i)=>{
                 if(i!=0){
                return <tr className="row">
                        <td>{value.name}</td>
                        <td>{value.time}</td>
                    </tr>
                 }
             })
         }
         </div>
        </div>
        </div>
    );
}

export default RightPart;
