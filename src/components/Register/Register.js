
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import './Register.css'


        const Register = () => {
          
        
            return (
                <Container className=''>
                <Row className=''>
                 
        
        
                  <Col sm={12} lg={7} ><div className='register w-75  '>
                    <h1 className='mb-1 text-center'>Register </h1>
        
                    <Form >

              <Form.Group className="mb-2" controlId="formBasicFullName">
                <Form.Label className='formlabel fw-bold'>Full Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter your name" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicImageUrl">
                <Form.Label className='formlabel fw-bold'>Image Url</Form.Label>
                <Form.Control type="text" name="imageurl" placeholder="Image url" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />  
              </Form.Group>

             
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className='formlabel fw-bold'>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>
        
             
              <p className='text-danger fw-bold text-center'><small></small></p>

              <button className='sub-btn ' type='submit'>REGISTER</button>
             
              <button className='google-btn  mt-3' type='submit'><FcGoogle/> GOOGLE</button>

             
              <p className='text-center text-white'><small>Already Have an account? please <Link to='/login' className='text-info fw-bold'>Login</Link></small></p>

              
              
            </Form>
                </div></Col>
                </Row>
                
              </Container>
              
        
        
        
                
            );
        };
    
        export default Register;