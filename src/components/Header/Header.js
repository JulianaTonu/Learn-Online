import React, { useContext } from 'react';

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from  '../../images/logo.jpg'
import SideNav from '../SideNav/SideNav';
import { AuthContext } from '../../context/UserContext';
import { Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import Tippy from '@tippyjs/react';

const Header = () => {

  const {user, logOut}=useContext(AuthContext);

 const handleLogOut = () =>{
     logOut() 
    .then(()=>{})
    .catch(e=>console.error(e))
  }
    return (
        <div>
            

            <Navbar className='navbar  ' expand="lg">
      <Container>
        <Navbar.Brand className='title text-warning fs-4' href="#home"><img className='logo' src={logo} alt=""/>Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav text-warning" to="/">Tutorials</NavLink>
 
            <NavLink className="px-3  nav text-warning" to="/faq">FAQ</NavLink>
            <NavLink className="px-3  nav text-warning" to="/blog">Blog</NavLink>

            <NavLink className="px-3  nav text-warning" to="/register">Register</NavLink>
            

{/* // show user name   */}
{ user?.uid  && user?.photoURL ?

<>

 <Tippy className='text-warning' content={user?.displayName}>
 <Image  
style ={{height:'40px'}} roundedCircle
src={user?.photoURL}
></Image>
 </Tippy>
<button onClick={handleLogOut} className="px-3 ms-3 btn btn-warning" >Logout</button>

 
</>

:

<>
<NavLink className="px-3  nav text-warning" to="/login">Login</NavLink>
</>
}


        <div className='d-lg-none'>
          <SideNav></SideNav>
        </div>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;