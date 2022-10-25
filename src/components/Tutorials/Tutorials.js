import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Tutorials = () => {
    const all_tutorials = useLoaderData()
    console.log(all_tutorials)
    return (
        <div>
            <h1>All tutorials</h1>
        </div>
    );
};

export default Tutorials;