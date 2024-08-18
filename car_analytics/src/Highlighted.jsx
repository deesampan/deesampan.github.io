import React from 'react';

//makeing grid
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Highlighted = () => {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col md="auto">
            <h2>My Highlighted</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default Highlighted;