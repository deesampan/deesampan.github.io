import React from "react";
import { Chart as ChartJS } from "chart.js/auto";
import { Pie } from "react-chartjs-2";
import './App.css'

//data
import car_data from "../taladrod-cars.json"

function Pie_Chart(){

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
        datasets:[
            {
                label : "Step",
                data: brandTotals.map((data)=>data.total)
            },
        ],
    }
    const option = {}


    return(
        <>
            <div className="reduce_size">
                <Pie data={data} options={option}/>
            </div>
        </>
    )
   
}

export default Pie_Chart;