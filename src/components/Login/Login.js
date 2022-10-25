import React, { useContext } from 'react';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useNavigate, useLocation } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import './Login.css'
import { AuthContext } from '../../context/UserContext';



const Login = () => {

    const {signIn} = useContext(AuthContext)   
    const navigate =useNavigate()
    const location =useLocation()

const from =location.state?.from?.pathname || '/'

    const handleSubmit = (event)=>{
        event.preventDefault()
        const form =event.target
        const email =form.email.value
        const password =form.password.value;
        console.log( email, password)

        signIn(email, password)
        .then(result=>{
          const user =result.user;
          console.log(user)
          form.reset()
          navigate(from,{replace:true})
        })
        .catch(e=>console.error(e))
    }

    return (
        <Container className=''>
        <Row className=''>
         

          <Col sm={12} lg={7} ><div className='register w-75  '>
            <h1 className='mb-1 text-center'>Login </h1>

            <Form onSubmit={handleSubmit}>

      

      

      <Form.Group className="mb-2" controlId="formBasicEmail">
        <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />  
      </Form.Group>

     
      <Form.Group className="mb-2" controlId="formBasicPassword">
        <Form.Label className='formlabel fw-bold'>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>

     
      <p className='text-danger fw-bold text-center'><small></small></p>

      <button className='sub-btn ' type='submit'>Login</button>
     
      <button className='google-btn  mt-3' type='submit'><FcGoogle/> GOOGLE</button>

     
      <p className='text-center text-white'><small>New to this website? Please <Link to='/register' className='text-info fw-bold'>Register</Link></small></p>

      
      
    </Form>
        </div></Col>
        </Row>
        
      </Container>
    );
};

export default Login;