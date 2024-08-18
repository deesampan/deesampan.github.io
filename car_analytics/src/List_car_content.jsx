import React from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/list_car_content.css"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';

import car_data from "../taladrod-cars.json"

function calculateBrandTotals(data) {
    const brandTotals = data.MMList.map(brand => {
        const total = data.Cars.filter(car => car.MkID === brand.mkID).length;
        return { brand: brand.Name, total: total };
    });

    return brandTotals;
}

const brandTotals = calculateBrandTotals(car_data);

function list_car_content(){
    return(
        <>
            <div className="main_board">
                <SimpleBar style={{maxHeight:700}} forceVisible="y" autoHide={false}>
                    {
                        brandTotals.map((data)=>{
                            return(
                                <div>
                                    <h6>{data.brand}</h6>
                                    <h6>{data.total}</h6>
                                </div>
                            )
                        })
                    }
                </SimpleBar>
            </div>
        </>
    )
}


export default list_car_content;