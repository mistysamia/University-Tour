import React from 'react';
import '../List/List.css';
import { Col, Row, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


const ReviewItem = (props) => {
    const { name, fee, id, country, score, image } = props.list;
    const { handleRemove } = props;
    console.log(props);
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
                        onClick={() => handleRemove(id)} >
                        Remove</Button>

                </Col>
            </Row>
        </section>

    );
};

export default ReviewItem;