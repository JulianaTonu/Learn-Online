import React from 'react';

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'



const Header = () => {
    return (
        <div>
            

            <Navbar className='navbar  ' expand="lg">
      <Container>
        <Navbar.Brand className='title text-warning fs-4' href="#home">Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav" to="/">Courses</NavLink>
           
            <NavLink className="px-3  nav" to="/blog">Blog</NavLink>
            <NavLink className="px-3  nav" to="/login">Login</NavLink>
            <NavLink className="px-3  nav" to="/register">Register</NavLink>
            <NavLink className="px-3  nav" >Light</NavLink>
        
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;