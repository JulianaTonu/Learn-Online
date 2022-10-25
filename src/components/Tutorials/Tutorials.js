import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialCard from '../TutorialCard/TutorialCard';
import './Tutorials.css'
const Tutorials = () => {
    const all_tutorials = useLoaderData()
    console.log(all_tutorials)
    return (
        <div className='tutorial-container '>
        <h1>All Tutorials are here.Choose your favrite topic and start learn from today.Good Luck.</h1>

<div className='card'>

{
                all_tutorials.map(tutorial => <TutorialCard
                key = {tutorial.id}
                tutorial ={tutorial}
                ></TutorialCard>)
            }

</div>
        </div>
    );
};

export default Tutorials;