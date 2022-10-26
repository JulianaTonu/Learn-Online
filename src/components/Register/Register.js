
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import { Link, useNavigate } from 'react-router-dom';


import './Register.css'
import { useContext } from 'react';
import { AuthContext } from '../../context/UserContext';
import toast from 'react-hot-toast';


        const Register = () => {
          
       const {createUser, updateUserProfile} =useContext(AuthContext)   

       const navigate =useNavigate()
       
            const handleSubmit=(event)=>{
                event.preventDefault()
                const form =event.target
                const name =form.name.value
                const image=form.image.value
                const email =form.email.value
                const password =form.password.value;
                const confirm =form.confirm.value;
                console.log(name, image, email, password,confirm)

                if(password !== confirm){
                  toast.error("password dosen't match")
                }
                createUser(email, password)
                .then(result=>{
                  const user =result.user;
                  console.log(user)
                  form.reset()
                  navigate('/login')


                  handleUpdateProfile(name , image)
                })
                .catch(e=>console.error(e))

                const handleUpdateProfile =(name, photoURL )=>{

                  const profile = {

                    displayName: name,
                    photoURL : image
                  }
                  updateUserProfile(profile)
                  .then(()=>{})
                  .catch(e=>console.error(e))
                }
            }


         return (
                <Container className=''>
                <Row className=''>
                 
        
                  <Col sm={12} lg={7} ><div className='register w-75  '>
                    <h1 className='mb-1 text-center'>Register </h1>
        
                    <Form onSubmit={handleSubmit}>

              <Form.Group className="mb-2" controlId="formBasicFullName">
                <Form.Label className='formlabel fw-bold'>Full Name</Form.Label>
                <Form.Control type="name" name="name" placeholder="Enter your name" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicImageUrl">
                <Form.Label className='formlabel fw-bold'>Image Url</Form.Label>
                <Form.Control type="text" name="image" placeholder="Image url" />  
              </Form.Group>
        
              <Form.Group className="mb-2" controlId="formBasicEmail">
                <Form.Label className='formlabel fw-bold'>Email address</Form.Label>
                <Form.Control type="email" name="email" placeholder="Enter email" />  
              </Form.Group>

             
              <Form.Group className="mb-2" controlId="formBasicPassword">
                <Form.Label className='formlabel fw-bold'>Password</Form.Label>
                <Form.Control type="password" name="password" placeholder="Password" />
              </Form.Group>

              <Form.Group className="mb-2" controlId="formBasicConfirmPassword">
                <Form.Label className='formlabel fw-bold'>Confirm Password</Form.Label>
                <Form.Control type="password" name="confirm" placeholder="confirm password" />
              </Form.Group>
        
             
              <p className='text-danger fw-bold text-center'><small></small></p>

              <button className='sub-btn ' type='submit'>REGISTER</button>
            

              <p className='text-center text-primary'><small>Already Have an account? please <Link to='/login' className='text-info fw-bold'>Login</Link></small></p>

              
              
            </Form>
                </div></Col>
                </Row>
                
              </Container>
              
        
        
        
                
            );
        };
    
        export default Register;