import React, { useState } from "react";
import Car_Card from "./Car_Card";
import car_data from "../taladrod-cars.json"

function BrandOfModel(props) {

    const filterData = car_data.Cars.filter((data)=>
        data.MkID === props.selected
    )

    return (
        <>
            {
                filterData.map((data)=>{
                    return(
                        <Car_Card dataset={data} state={0}/>
                    )
                })
            }
        </>
    );
}

export default BrandOfModel;
