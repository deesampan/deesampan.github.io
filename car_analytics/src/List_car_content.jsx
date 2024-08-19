import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css"
import "./assets/list_car_content.css"
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Table from 'react-bootstrap/Table';
import { Container,Row,Col } from "react-bootstrap";
import Form from 'react-bootstrap/Form';

import car_data from "../taladrod-cars.json"

//import table
import Table_car_list from "./table_car_list"

function calculateBrandTotals(data) {
    const brandTotals = data.MMList.map(brand => {
        const total = data.Cars.filter(car => car.MkID === brand.mkID).length;
        return { brand: brand.Name, total: total, id: brand.mkID};
    });

    return brandTotals;
}

const brandTotals = calculateBrandTotals(car_data);
console.log(brandTotals)

function list_car_content(props){
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedCar, setSelectedCar] = useState(null)


    const onSearchChange = (e) =>{
        console.log(e.target.value)
        setSearchQuery(e.target.value);
    }

    const fitleredCarSearch = brandTotals.filter(data =>
        data.brand.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const click_for_select_car = (e) =>{
        console.log("this is selected car : ",e)
        setSelectedCar(e)

        props.action(e)
    }

    const child_of_car_data = car_data.Cars.filter((car) => 
        car.MkID === Number(selectedCar)
    );

    return(
        <>
            <div className="main_board">
                <Row>
                    <Col xs={6}>

                    </Col>
                    <Col xs={6}>
                        <Form className="mt-2 me-2">
                            <Form.Group className="mb-3" controlId="formGroupEmail" id="search_bar">
                                <Form.Control placeholder="Search" onChange={onSearchChange}/>
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
                <Row>
                    <SimpleBar style={{maxHeight:600}} forceVisible="y" autoHide={false}>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>Brand Name</th>
                                <th>Total</th>
                                <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    fitleredCarSearch.map((data)=>{
                                        return(
                                            <Table_car_list dataset={data} action={click_for_select_car}/>
                                        )
                                    })
                                }
                            </tbody>
                        </Table>
                    </SimpleBar>
                </Row>
            </div>
        </>
    )
}


export default list_car_content;
