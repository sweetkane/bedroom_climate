import React from 'react';
import Climates from './Climates';
import { Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    return (

        <Container fluid>
            <Row style={{ marginTop: 15 }}>
                <Col>
                    <Climates type="Indoor" />
                </Col>
            </Row>
            <Row style={{ marginTop: 15 }}>
                <Col>
                    <Climates type="Outdoor" />
                </Col>
            </Row>
            <div
                style={{
                    marginTop: 15,
                    marginLeft: 15,
                    color: '#343a40',
                    backgroundColor: '#343a40',
                    height: 1,
                    width: '16rem'
                }}
            />
            <Row style={{ marginTop: 15 }}>
                <Col>
                    <Climates type="Preferred" />
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;