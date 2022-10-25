import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './TutorialCard.css'

const TutorialCard = ({tutorial}) => {
const {name, image_url} =tutorial
    console.log('tutorial', tutorial)
    return (

        <Card className='tutorial' style={{ width: '15rem' }}>
        <Card.Img className='img' variant="top" src={image_url}/>
        <Card.Body>
          <Card.Title>
            {name}
          </Card.Title>
         
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>

    );
};

export default TutorialCard;