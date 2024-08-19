import React, { useState } from "react";

//makeing grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

//chart
import Pie_Chart from "./Pie_Chart"
import Stack_Chart from "./Stack_Chart"

//hover box
import HoverBox from "./Hover_Box";

//list car content
import List_car_content from "./List_car_content"

import Brand_of_model from './brand_of_model';

import "./App.css"





const Dashboard = () => {
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"></link>

    const [selectedCar, setSelectedCar] = useState(null)

    const receiveSelectedCar = (e) =>{
        console.log("this is from dashboard, selected car is : " , e)
        setSelectedCar(e)
    }
    
    return (
        <Container>
            <Row className="justify-content-md-center">
                <Col md="auto">
                    <h2 className="intro">Dashboard</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={6}>
                    <Pie_Chart />
                </Col>
                <Col xs={6}>
                    <HoverBox context={"Portion of Cars by brand 🏎"} isred={true}/>
                </Col>
            </Row>
            <hr />
            <Row>
                <Col xs={6}>
                    <HoverBox context={"Model Of Brand💸"} isred={false}/>
                </Col>
                <Col xs={6}>
                    <Stack_Chart />
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12}>
                    <h1 className='styled-header'>List Or Car's Brand</h1>
                    <i class="bi bi-list-nested"></i>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {/* content of list of car */}
                <Col xs={12}>
                    <List_car_content action={receiveSelectedCar}/>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                <Col xs={12}>
                    <h1 className='styled-header'>Model Of Brand</h1>
                    <i class="bi bi-list-nested"></i>
                </Col>
            </Row>
            <Row className="justify-content-md-center">
                {/* content of list of car */}
                <Col xs={12}>
                    <Brand_of_model selected={selectedCar}/>
                </Col>
            </Row>


        </Container>
    );
};

export default Dashboard;