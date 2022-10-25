import React from 'react';
import { useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';


const CardDetails = () => {
    const cardDetails = useLoaderData()
    console.log('cardDetails',cardDetails)
    const {name, details, image_url, total_view, } =cardDetails
    return (
        <div>
               <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <p>{total_view}</p>
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardDetails;