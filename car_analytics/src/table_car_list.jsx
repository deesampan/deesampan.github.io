import React from "react";
import Button from 'react-bootstrap/Button';

function table_list(props) {
    const dataset = props.dataset;
    const brand_id = dataset.id

    const handleClick = () =>{
        props.action(brand_id)
    }
    return (
            <tr>
            <td>{dataset.brand}</td>
            <td>{dataset.total}</td>
            <td><Button variant="outline-success" onClick={handleClick}>Click to see its model</Button></td>
            </tr>
    );
}

export default table_list;
