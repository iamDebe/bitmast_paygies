import React from 'react';
import { Pie } from "react-chartjs-2"

const PieChart = () => {

    const data ={
        labels:['jan', 'feb', 'mar', 'april'],
        dataSets: [
            {
                label: 'sales for 2020 (M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor:[
                    'rgba(255, 99, 132, 1)',
                    'rgba(255, 205, 86, 1)',
                    'rgba(255, 162, 235, 1)',
                    'rgba(255, 159, 64, 1)',
                    'rgba(153, 102, 255, 1)',
                ]
            }
        ]
    }
    const options = {
        title:{
            display: true,
            text: 'Pie chart'
        }
    }
  return (
    <div>
        <Pie data={data} options={options}/>
    </div>
  )
}

export default PieChart