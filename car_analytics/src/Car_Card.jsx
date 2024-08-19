import React from "react";
import "./Car_Card.css"
import { Container,Row,Col } from "react-bootstrap";

function Car_Card(props){
    const data = props.dataset;
    const model_name = data.Model;
    const model_price = data.Prc;
    const model_img = data.Img300;
    return(
        <>
            <div className="main_board_card">
                <Container>
                    <Row>
                        <Col xs={6}>
                            <img src={model_img} width="120%" height="200px"/>
                        </Col>
                        <Col xs={6}>
                            <Row>
                                <Col>
                                    <div className="card_right">
                                        {model_name}
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="card_down">
                                        {model_price} Baht
                                    </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    )
}

export default Car_Card;