import React, { useState, useEffect } from 'react';
import "./App.css";

// Bootstrap components
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Show_all_car_for_pin from "./show_all_car_for_pin";
import Show_highlight from './show_highlight';

import car_data from "../taladrod-cars.json";

const Highlighted = () => {
  // Initialize state for total_car_with_pin
  const [totalCarWithPin, setTotalCarWithPin] = useState(() => {
    const savedCars = localStorage.getItem('totalCarWithPin');
    return savedCars ? JSON.parse(savedCars) : car_data.Cars;
  });

  const [highlightedCar, setHighlightedCar] = useState(() => {
    const savedHighlightedCars = localStorage.getItem('highlightedCar');
    return savedHighlightedCars ? JSON.parse(savedHighlightedCars) : [];
  });

  useEffect(() => {
    localStorage.setItem('totalCarWithPin', JSON.stringify(totalCarWithPin));
  }, [totalCarWithPin]);

  useEffect(() => {
    localStorage.setItem('highlightedCar', JSON.stringify(highlightedCar));
  }, [highlightedCar]);

  const make_car_pin = (e) => {
    console.log("this is cid:", e);

    const updatedCarList = totalCarWithPin.filter(data => data.Cid !== e);
    const updateHighlight = car_data.Cars.filter(data => data.Cid == e);

    setTotalCarWithPin(updatedCarList);
    setHighlightedCar([...highlightedCar, updateHighlight[0]]);
  };

  const retrieve_car = (e) => {
    const updateHighlight = highlightedCar.filter(data => data.Cid !== e.Cid);

    setTotalCarWithPin([...totalCarWithPin, e]);
    setHighlightedCar(updateHighlight);
  };

  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
          <h2 className='intro'>My Highlighted List</h2>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <h1 className='styled-header'>My Highlighted📌</h1>
          <i className="bi bi-stars"></i>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Show_highlight dataset={highlightedCar} action={retrieve_car}/>
      </Row>
      <hr />
      <Row className="justify-content-md-center">
        <Col xs={12}>
          <h1 className='styled-header'>List Of All Cars</h1>
          <i className="bi bi-list-nested"></i>
        </Col>
      </Row>
      <Row className="justify-content-md-center">
        <Show_all_car_for_pin dataset={totalCarWithPin} action={make_car_pin} />
      </Row>
    </Container>
  );
};

export default Highlighted;
