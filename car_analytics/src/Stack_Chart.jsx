import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Bar } from "react-chartjs-2";

//data
import car_data from "../taladrod-cars.json"

function Bar_Chart(){

    function calculateBrandTotals(data) {
        const brandTotals = data.MMList.map(brand => {
            const total = data.Cars.filter(car => car.MkID === brand.mkID).length;
            return { brand: brand.Name, total: total };
        });

        return brandTotals;
    }

    const brandTotals = calculateBrandTotals(car_data);


    const data = {
        labels: brandTotals.map((data)=>data.brand),
        datasets: [
          {
            label: 'Dataset 1',
            data: brandTotals.map((data)=>data.total),
          },
          {
            label: 'Dataset 2',
            data: brandTotals.map((data)=>data.total),
          },
          {
            label: 'Dataset 3',
            data: brandTotals.map((data)=>data.total),
          },
        ]
      };
    const option = {
        plugins: {
          title: {
            display: true,
            text: 'Model of Brand'
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    return(
        <>
            <Bar data={data} options={option}/>
        </>
    )
   
}

export default Bar_Chart;