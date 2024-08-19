import React ,{useState} from "react";

import Car_Card from "./Car_Card";

function show_highlight(props){
    const dataset = props.dataset;

    const retrieve_car = (e) =>{
        props.action(e)
    }
    
    return(
        <>
            {
                dataset.map((data)=>{
                    return(
                        <Car_Card dataset={data} state={2} action={retrieve_car}/>
                    )
                })
            }
        </>
    );
}


export default show_highlight;