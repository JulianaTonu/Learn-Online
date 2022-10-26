import React from 'react';
import { useLoaderData } from 'react-router-dom';
import TutorialCard from '../TutorialCard/TutorialCard';
import './Tutorials.css'
const Tutorials = () => {
    const all_tutorials = useLoaderData()
    console.log(all_tutorials)
    return (
        <>
        <p className='text-primary m-4 mt-5 text-center'>All Tutorials are here.Choose your favorite topic and start learn from today.Good Luck.</p>

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