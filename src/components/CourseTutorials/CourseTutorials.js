import React from 'react';
import Card from 'react-bootstrap/Card';
import './CourseTutorials.css'

import { useLoaderData } from 'react-router-dom';

const CourseTutorials = () => {

    const tutorials = useLoaderData()
    const {name, details, image_url, total_view, } =tutorials
    console.log('my tutorial',tutorials)
    return (
        <div className='mt-4'>
           <Card className='details-card '>
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

export default CourseTutorials;