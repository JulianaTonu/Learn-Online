import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CourseTutorials = () => {

    const tutorials = useLoaderData()
    
    console.log(tutorials)
    return (
        <div>
            <h1 className='text-white'>this is tutorials : {tutorials.length}</h1>
        </div>
    );
};

export default CourseTutorials;