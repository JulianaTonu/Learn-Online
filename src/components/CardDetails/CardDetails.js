import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import './CardDetails.css'
import jsPDF from 'jspdf'

const CardDetails = () => {

    const cardDetails = useLoaderData()
    
    console.log('cardDetails',cardDetails)
    const {name, details, image_url, total_view,_id } =cardDetails

   const  pdfGenerate =()=>{
      let doc = new jsPDF('landscape', 'px', 'a4', 'false');
      doc.addPage()
      doc.setFont('Helvertica', 'bold')
      doc.text(60,60, 'Name :')
      doc.text(60,80, 'Total View :')
      doc.text(60,100, 'Details :')
      
      doc.setFont('Helvertica', 'Normal')
      doc.text(100,60, `${name}`)
      doc.text(100,80,`${total_view}`)
      doc.text(110,100,`${details}`)
    
      doc.save('a.pdf')
    }

    return (
        <div>

          <button className='btn btn-info' onClick={pdfGenerate}>DownLoad Pdf</button>
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