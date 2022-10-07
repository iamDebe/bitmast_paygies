import React from 'react';
import {VictoryPie} from "victory-pie";

const PieChart = () => {

    const myData =[
        {x: "Litecoin", y: 200},
        {x: "Dashcoin", y: 800},
        {x: "Bitcoin", y: 300},
        {x: "Dogecoin", y: 100},
    ];

   
  return (
    <div >
        <VictoryPie 
        data={myData} 
        colorScale={["#4e4848", "#009adc", "#ef9b12", "#918a33"]}
        radius={150}/>
    </div>
  )
}

export default PieChart