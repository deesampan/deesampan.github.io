import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Highlighted from './Highlighted';
import 'bootstrap/dist/css/bootstrap.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  return (
    <Router basename="/car_analytics">
      <Container fluid>
        <Row>
          <Col>
            <Sidebar />
          </Col>
          <Col>
            <div style={{ position: 'absolute', top: '0', left: '200px', right: '0', padding: '20px', backgroundColor:'white'}}>
              <Routes>
                <Route path="/" element={<Dashboard />} />
                <Route path="/highlighted" element={<Highlighted />} />
                <Route path="*" element={<Navigate to="/" />} /> 
              </Routes>
            </div>
          </Col>
        </Row>
      </Container>
    </Router>
  );
}

export default App;
