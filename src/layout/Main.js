import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';

const Main = () => {
    return (
        <div>

        <Header></Header>
        <Container>
            <Row>
                <Col lg="3" className='d-none d-lg-block'>
                <SideNav></SideNav>
                </Col>

                <Col >
                <Row>
                <Outlet></Outlet>

                </Row>

                </Col>
            </Row>
        </Container>
        </div>
    );
};

export default Main;