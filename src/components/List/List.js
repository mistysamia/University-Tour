import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import './List.css';
import { Col, Row,Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const List = (props) => {
    const { name, image, fee, country, score } = props.list;

    return (

        <section className="eachList">
            <Row className="eachListShow">
                <Col sm={6} className="eachListImage">
                    <img src={image} alt="" />
                </Col>
                <Col sm={6} className="eachListDetails">
                    <h2 className="List-Headings">{name}</h2>
                    <p> Country : {country}</p>
                    <p>Fee : ${fee}</p>
                    <p>Score: {score}</p>
                   
                    <br />
                    <Button variant="success"
                    onClick={() => props.handleAddToCart(props.list)} >
                        <FontAwesomeIcon icon={faBookmark} />  Add </Button>
                   
                </Col>
            </Row>
        </section>

    );
};

export default List;