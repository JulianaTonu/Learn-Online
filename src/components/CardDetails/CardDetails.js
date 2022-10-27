import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './CardDetails.css'
import jsPDF from 'jspdf'

const CardDetails = () => {

    const cardDetails = useLoaderData()
    
    console.log('cardDetails',cardDetails)
    const {name, details, image_url, total_view,_id } = cardDetails

   const  pdfGenerate =()=>{
      let doc = new jsPDF('landscape', 'px', 'a4', 'false');
      
      doc.setFont('Helvertica', 'bold')
      doc.text(30,30, 'Name :')
      doc.text(30,50, 'Total View :')
      doc.text(30,70, 'Details :')
      
      doc.setFont('Helvertica', 'Normal')
      doc.text(70,30, `${name}`)
      doc.text(100,50,`${total_view}`)
      doc.text(80,70,`${details}`)
    
      doc.save('a.pdf')
    }

    return (
        <div>

          <button className='btn btn-danger ' onClick={pdfGenerate}>DownLoad Pdf</button>
               <Card className='details-card'>
      <Card.Img className='img' variant="top" src={image_url} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {details}
        </Card.Text>
        <p>Total view: {total_view}</p>
        <Link to={`/checkout/${_id}`}><button className='btn btn-primary'>Get Premium Access</button></Link>
        
      </Card.Body>
    </Card>
        </div>
    );
};

export default CardDetails;