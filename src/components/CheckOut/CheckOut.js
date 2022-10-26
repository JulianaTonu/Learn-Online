import React from 'react';
import Card from 'react-bootstrap/Card';
import { useLoaderData } from 'react-router-dom';
import './CheckOut.css'

const CheckOut = () => {

    const premium = useLoaderData()
    const {name, course_time,total_video,total_quiz}=premium
    return (
        <div className='mt-5  ms-3'>
          <h2 className='m-3 ms-5 mb-5'>
            Get Started From Today
          </h2>
            <Card className='prime-card'>
      
      <Card.Body className='text-center'>
        <Card.Title>{name}</Card.Title>
        <Card.Title>Time:{course_time.time}</Card.Title>
        <Card.Title>Total Quiz: {total_quiz}</Card.Title>
        <Card.Title>Total video: {total_video}</Card.Title>
      </Card.Body>
    </Card>

    <Card className='prime-card'>
      
      <Card.Body className='text-center'>
        
        <Card.Title>Payment Method</Card.Title>
        
        <Card.Title>
        <input type='radio'  value='Payment'/>Bikash
        </Card.Title>

        <Card.Title>
        <input type='radio'  value='Payment'/>PayPal
        </Card.Title>
       
       <button className='btn btn-primary px-4'>Get Now</button>

      </Card.Body>
    </Card>
        </div>
    );
};

export default CheckOut;