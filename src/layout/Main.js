import React from 'react';
// import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header/Header';
import SideNav from '../components/SideNav/SideNav';

const Main = () => {
    return (
        <div>
<Header></Header>
<div className="container">
  <div className="row">
    <div className="col-2 d-none d-lg-block">
    <SideNav></SideNav>
    </div>

    <div className="col">
        <div className="row">
        <Outlet></Outlet>
        </div>
    
    </div>
    


  </div>
</div>


        {/* <Header></Header>
        <Container>
            <Row>
                <Col lg="2" className='d-none d-lg-block'>
                <SideNav></SideNav>
                </Col>

<Col className=''>
    <Row>
    <Outlet></Outlet>
    </Row>
</Col>
                
            </Row>
            
        </Container> */}
        </div>
    );
};

export default Main;