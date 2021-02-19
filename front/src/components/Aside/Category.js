import React from 'react';
import {Link, NavLink, Route, Switch} from 'react-router-dom';


const Category = () => {
    return(
        <>
            <Link to="/">
                <span>Home</span>
            </Link>
            <Link to="/about">
                <span>About</span>
            </Link>
            <Link to="/post">
                <span>post</span>
            </Link>
        </>
    );

}

export default Category;


