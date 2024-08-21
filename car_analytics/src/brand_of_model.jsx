import React, { useState } from "react";
import Car_Card from "./Car_Card";
import car_data from "../taladrod-cars.json"
import { Container, Row } from "react-bootstrap";

function BrandOfModel(props) {

    const filterData = car_data.Cars.filter((data)=>
        data.MkID === props.selected
    )

    return (
        <>
            <Container>
                <Row>
                    {
                        filterData.map((data)=>{
                            return(
                                <Car_Card dataset={data} state={0}/>
                            )
                        })
                    }
                </Row>
            </Container>
        </>
    );
}

export default BrandOfModel;
