import React from "react";
import "./Car_Card.css"
import { Container,Row,Col } from "react-bootstrap";
import {Button} from "react-bootstrap";

function Car_Card(props){
    const data = props.dataset;
    const model_price = data.Prc;
    const model_img = data.Img300;
    const model_cid = data.Cid;
    const model_real = data.NameMMT


    const state = props.state


    let pinning = ""

    const clickStateOne=()=>{
        props.action(model_cid)
    }
    
    const clickStateTwo=()=>{
        props.action(data)
    }

    if (state==1){
        pinning = <Button variant="outline-danger" onClick={clickStateOne}>📌</Button>
    }else if(state == 2){
        pinning = <Button variant="outline-danger" onClick={clickStateTwo}>Remove❌</Button>
    }

    return (
        <>
            <Col xs>
                <div className="main_board_card">
                    <div className="pinning-button">
                        {pinning}
                    </div>
                    <Container>
                        <Row>
                            <Col xs={6}>
                                <img src={model_img} width="120%" height="200px" />
                            </Col>
                            <Col xs={6}>
                                <Row>
                                    <Col>
                                        <div className="card_right">
                                            {model_real}
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
            </Col>
        </>
    );
}

export default Car_Card;