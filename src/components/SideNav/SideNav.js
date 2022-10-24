import React, { useEffect, useState } from 'react';
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
            <h1>All Category : {categories.length}</h1>
        </div>
    );
};

export default SideNav;