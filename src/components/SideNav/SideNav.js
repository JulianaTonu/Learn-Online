import React, { useEffect, useState } from 'react';
import { Link} from 'react-router-dom';
import './SideNav.css';

const SideNav = () => {
   
    const [categories, setCategories] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/categories')
        .then(res=>res.json())
        .then(data=>setCategories(data))
    },[])
    return (
        <div>
            <h1 className='mb-4 mt-5'>All Category</h1>
            <div>
              {

                  categories.map(category => <p
                key={category.id}
                category ={category}
                    
                >
                 <Link className="side-nav" to={`/category/${category.id}`}>{category.name}</Link>

                 

                </p>)
              }
            </div>
        </div>
    );
};

export default SideNav;