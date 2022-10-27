import React, { useContext, useEffect, useState } from 'react';

import {  NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css'
import logo from  '../../images/logo.jpg'
import SideNav from '../SideNav/SideNav';
import { AuthContext } from '../../context/UserContext';
import { Image } from 'react-bootstrap';

import Tippy from '@tippyjs/react';
// import DarkMode from '../DarkMode/DarkMode';

const Header = () => {

  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);



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
        <Navbar.Brand className='title text-primary fs-4' href="#home"><img className='logo' src={logo} alt=""/>Learn Online</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavLink className="px-3 ms-5 nav text-primary my-2" to="/">Tutorials</NavLink>
 
            <NavLink className="px-3  nav text-primary my-2" to="/faq">FAQ</NavLink>
            <NavLink className="px-3  nav text-primary my-2" to="/blog">Blog</NavLink>

            <NavLink className="px-3  nav text-primary my-2" to="/register">Register</NavLink>
           

            
            

{/* // show user name   */}
{ user?.uid  && user?.photoURL ?

<>
{/* // tippy for show user name when hover user image */}
 <Tippy className='text-warning fw-bold' content={user?.displayName}>
 <Image  className='pro-pic my-2'
 roundedCircle
src={user?.photoURL}
></Image>
 </Tippy>
<button onClick={handleLogOut} className="px-3 ms-3 btn btn-primary my-2"  >Logout</button>

 
</>

:

<>
<NavLink className="px-3  nav text-primary my-2" to="/login">Login</NavLink>
</>
}
<button onClick={ toggleTheme } className="px-3 ms-3 btn btn-dark my-2" >Theme</button>


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