import React from 'react'

import Chart from "react-google-charts";
import "./Ranking.css"

function Ranking() {
    
const Data = [
    ["Families", "Efficiency percentage"],
    ["Family-1", 10],
    ["Family-2",12],
    ["Family-3", 14],
    ["Family-4", 16],
    ["Family-5", 22],
    
  ];
    return (
        <div className="body">
            <h1 className="rank__head"> Your Ranking in your locality</h1>
            <div className="graph__holder">
            <Chart chartType="Bar" className="graph" width="50vw" height="500px"  data={Data} />
            </div>
        </div>
    )
}

export default Ranking;
