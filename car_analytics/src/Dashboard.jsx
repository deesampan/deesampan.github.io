import React, { useState } from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Pie_Chart from "./Pie_Chart";
import Stack_Chart from "./Stack_Chart";
import HoverBox from "./Hover_Box";
import List_car_content from "./List_car_content";
import Brand_of_model from './brand_of_model';
import Sidebar from "./Sidebar";
import "./App.css";

const Dashboard = () => {
    const [selectedCar, setSelectedCar] = useState(null);

    const receiveSelectedCar = (e) => {
        console.log("Selected car from dashboard: ", e);
        setSelectedCar(e);
    };
    
    return (
        <Container fluid>
            <Row>
                <Col xs={3}>
                    <Sidebar />
                </Col>
                <Col xs={9}>
                    <div style={{ position: 'absolute', top: '0', left: '300px', right: '0', padding: '20px', backgroundColor: 'white',width:"80%"}}>
                        <div style={{margin:"0 auto"}}>
                            <Row className="justify-content-md-center">
                                <Col>
                                    <h2 className="intro">Dashboard</h2>
                                </Col>
                            </Row>
                            <Row>
                                <Col xs md={6}>
                                    <Pie_Chart />
                                </Col>
                                <Col xs md={6}>
                                    <HoverBox context={"Portion of Cars by brand 🏎"} isred={true}/>
                                </Col>
                            </Row>
                            <hr />
                            <Row>
                                <Col xs={6} md={6}>
                                    <HoverBox context={"Model Of Brand💸"} isred={false}/>
                                </Col>
                                <Col xs={6} md={6}>
                                    <div style={{width:'700px'}}>
                                        <Stack_Chart />
                                    </div>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <h1 className='styled-header'>List Of Car's Brand</h1>
                                    <i className="bi bi-list-nested"></i>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <List_car_content action={receiveSelectedCar}/>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <h1 className='styled-header'>Model Of Brand</h1>
                                    <i className="bi bi-list-nested"></i>
                                </Col>
                            </Row>
                            <Row className="justify-content-md-center">
                                <Col xs={12}>
                                    <Brand_of_model selected={selectedCar}/>
                                </Col>
                            </Row>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
