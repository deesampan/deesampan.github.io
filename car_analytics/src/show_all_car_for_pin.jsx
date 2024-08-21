import React, {useState} from "react";


import Car_Card from "./Car_Card";
import Form from 'react-bootstrap/Form';
import { Container,Row,Col} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css"


function Show(props){
    const [searchQuery, setSearchQuery] = useState("")

    const dataset = props.dataset;
    
    const onSearchBar = (e) =>{
        setSearchQuery(e.target.value)
    }

    const filterSearchData = dataset.filter((data)=>
        data.NameMMT.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const clickStateOne=(e)=>{
        props.action(e)
    }

    return(
        <>  
            <Container fluid>
                <Row>
                    <Col xs={6}>
                       
                    </Col>
                    <Col xs={6}>
                        <Form className="mt-2 me-2">
                            <Form.Group className="mb-3" controlId="formGroupEmail" id="search_bar">
                                <Form.Control placeholder="Search" onChange={onSearchBar} />
                            </Form.Group>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Container fluid="md">
                <Row>
                {
                    filterSearchData.map((data)=>{
                        return(
                            <Car_Card dataset={data} state={1} action={clickStateOne}/>
                        )
                    })
                }
                </Row>
            </Container>
        </>
    )
}

export default Show;