import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, ListGroup } from 'react-bootstrap';
import Settings from '../settings/Settings';
import ZipCodeForm from '../settings/ZipCodeForm';

const Climates = (props) => {

    const climates = useSelector(state => state);
    const zip = climates.Other.zip;
    const type = props.type; 

    return (
        <Container md="auto">
            <Row>
                <Col style={{ marginTop: 15 }}>
                    <Card style={{ width: '16rem' }}>
                        <Card.Header>
                            <h4>{type} &nbsp;
                                {type === "Outdoor" ? 
                                    <text style={{color: "#979a9d"}}>  ({zip})</text> 
                                    : ""
                                }
                            </h4>
                        </Card.Header>
                        <ListGroup variant="flush">
                            <ListGroup.Item >
                                <text>
                                    Temperature : </text>
                                <text style={{ color: '#007bff'}}>
                                    <b>{parseInt(climates[type].temperature, 10)}° F</b>
                                </text>
                            </ListGroup.Item>
                            <ListGroup.Item>
                                <text>
                                    Humidity : </text>
                                <text style={{ color: '#007bff'}}>
                                    <b>{parseInt(climates[type].humidity, 10)}%</b>
                                </text>
                            </ListGroup.Item>
                        </ListGroup>
                    </Card>
                </Col>
            </Row>
        {type === "Preferred" ? 
            <Row>
                <Col md="auto" style={{ marginTop: 15}} >
                    <Settings />
                </Col>
            </Row>
        : "" }
        {type === "Outdoor" ? 
            <Row>
                <Col md="auto" style={{ marginTop: 15}} >
                    <ZipCodeForm />
                </Col>
            </Row>
        : "" }
        
        </Container>
    );
}

export default Climates;