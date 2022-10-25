import React from 'react';

import './TutorialCard.css'

const TutorialCard = ({tutorial}) => {
const {name, image_url} =tutorial
    console.log('tutorial', tutorial)
    return (
        <div className='tutorial-card '>
        <img src={image_url} alt="" />

        <div className='tutorial-info '>
        <h2 className='mt-3'>{name}</h2>
        <button  className='btn btn-warning text-dark px-5 ms-5  fw-bold'>See Details</button>
        </div>

    </div>
    );
};

export default TutorialCard;