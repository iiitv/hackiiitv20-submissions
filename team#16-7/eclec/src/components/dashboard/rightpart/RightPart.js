import React,{useState} from 'react'
import "./style.css";
function RightPart() {

    const [arr,setarr]=useState([{}]);
    const [timearr,setTimearray] =  useState([{}]);
    const default1={
        name:"",
        min:"",
        max:"",
        power:"",
        // time:"",
        priority:""
    };
    var array=[];
    const [options,setoptions]=useState(default1);
    // const [outputFormat,setoutputFormat] = useState(defaultOutput)
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
    //Currently algorithm is working on average values.
    function algorithmForPower(props)
    {
        var hrs=(props.min+props.max)/2;
        var power=props.power;
        //Currently expecting days to be 30,will definitely change for applianes which we don't use regularyly
        var days=0.03
        return days*power*hrs;
    }
    var prevBillAvg = 546;
        var baseCharge = 45;
        var perDayCost = (prevBillAvg-baseCharge)/30;
        var perDayConsumptionUnits = (perDayCost/3);
        var perDayConsumption = perDayConsumptionUnits*1000;
        var AppliancesNo = 10;
        var firstBreak = AppliancesNo/3;
        var secondBreak = 2*firstBreak;
    function handleOutput(event){
        const arr=[];
        // var prevBillAvg = 546;
        // var baseCharge = 45;
        // var perDayCost = (prevBillAvg-baseCharge)/30;
        // var perDayConsumptionUnits = (perDayCost/3);
        // var perDayConsumption = perDayConsumptionUnits*1000;
        // var AppliancesNo = arr.length;
        // var firstBreak = AppliancesNo/3;
        // var secondBreak = 2*firstBreak;
        // var temp;
        // arr.map((value,i)=>{
        //     temp="";
        //     if(i<firstBreak){
        //         temp = ((value.min+value.max)/2)-10;
        //     }
        //     else if(i>firstBreak && i<secondBreak){
        //         temp = ((value.min+value.max)/2)-20;
        //     }
        //     else{
        //         temp = ((value.min+value.max)/2)-30;
        //     }
        //     array.push(temp);
        // })
        // console.log(arr);
        // console.log(array);
        // console.log(temp);
        // arr.map((value,index)=>{
        //     setarr(()=>{
        //         return [value,array[index]]
        //     })
        // }
        // )
        var dis = document.getElementById("output__table");
        dis.style.display="block"
        
    }
    return (
        <div>
        <div className="right">
        <div className="page">
        <h1>Enter details about your appliance</h1>
        <div class="input">
        <input type="text" placeholder="Ent
        er appliance name" onChange={handleChange}  name="name" value={options.name} required />
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
        </div>
        {/* <div className="page"> */}
        
            {/* {arr.map((value,i)=>{
                   

                   setarr1(
                       ()=>{
                           return [...arr];
                       }
                   );
                }
            )} */}
        <button type="submit" className="output__btn" onClick={handleOutput}>Get output </button>
        <div className="output__table" id="output__table">
        <tr className="row">
            <th>Appliance Name</th>
            <th>Usable amount of time</th>
            </tr>
         {
             arr.map((value,i)=>{
                 if(i!=0){

                     if(i<firstBreak){
                return <tr className="row">
                        <td>{value.name}</td>
                        <td>{Number(((Number(value.min)*60)+(Number(value.max)*60))/2)-10}</td>
                    </tr>
                     }
                     else if(i<firstBreak && i<secondBreak){
                        return <tr className="row">
                        <td>{value.name}</td>
                        <td>{Number(((Number(value.min)*60)+(Number(value.max)*60))/2)-20}</td>
                    </tr>

                     }
                     else{
                        return <tr className="row">
                        <td>{value.name}</td>
                        <td>{Number(((Number(value.min)*60)+(Number(value.max)*60))/2)-30}</td>
                    </tr>
                     }
                }
                 
             })
         }
         </div>
        </div>
        </div>
    );
}

export default RightPart;
