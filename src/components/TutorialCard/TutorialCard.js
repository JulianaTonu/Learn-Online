import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import './TutorialCard.css'

const TutorialCard = ({tutorial}) => {
const {name, image_url,_id} =tutorial
    console.log('tutorial', tutorial)
    return (

        <Card className='tutorial' style={{ width: '16rem' }}>
        <Card.Img className='img' variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title className='text-dark'>
            {name}
          </Card.Title>
         
          <Link to={`/details/${_id}`}><Button variant="warning" className='fw-bold px-4'>See Details</Button></Link>
        </Card.Body>
      </Card>

    );
};

export default TutorialCard;