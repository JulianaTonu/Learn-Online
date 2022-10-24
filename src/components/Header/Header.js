import React from 'react';

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from  '../../images/logo.jpg'


const Header = () => {
    return (
        <div>
            

            <Navbar className='navbar  ' expand="lg">
      <Container>
        <Navbar.Brand className='title text-warning fs-4' href="#home"><img className='logo' src={logo} alt=""/>Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav text-warning" to="/">Courses</NavLink>
           
            <NavLink className="px-3  nav text-warning" to="/blog">Blog</NavLink>
            <NavLink className="px-3  nav text-warning" to="/login">Login</NavLink>
            <NavLink className="px-3  nav text-warning"  to="/register">Register</NavLink>
            <NavLink className="px-3  nav text-warning" >Light</NavLink>
        
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;