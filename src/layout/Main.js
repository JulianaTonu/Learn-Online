import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div>

        
        <Container>
            <Row>
                <Col lg="3">
                <h1>side Navbar</h1>
                </Col>
                <Col>
                <Outlet></Outlet>
                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;