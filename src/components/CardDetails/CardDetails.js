import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './CardDetails.css'

const CardDetails = () => {
    const cardDetails = useLoaderData()
    
    console.log('cardDetails',cardDetails)
    const {name, details, image_url, total_view, } =cardDetails
    return (
        <div>
               <Card className='details-card'>
      <Card.Img className='img' variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <p>Total view: {total_view}</p>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardDetails;