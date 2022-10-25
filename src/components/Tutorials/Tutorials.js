import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialCard from '../TutorialCard/TutorialCard';
import './Tutorials.css'
const Tutorials = () => {
    const all_tutorials = useLoaderData()
    console.log(all_tutorials)
    return (
        <>
        <h3 className='text-white m-4'>All Tutorials are here.Choose your favrite topic <br/>and start learn from today.Good Luck.</h3>

      <div className='col tuto '>
     

{
                all_tutorials.map(tutorial => <TutorialCard
                key = {tutorial.id}
                tutorial ={tutorial}
                ></TutorialCard>)
            }

</div>
        </>
    );
};

export default Tutorials;