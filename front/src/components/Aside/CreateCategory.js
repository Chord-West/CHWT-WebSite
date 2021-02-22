import React from 'react';
import {Link} from "react-router-dom";

const Category = ({category}) =>{
    return(
        <div>
            <Link to={category.name} >
                <span >{category.name}</span>
            </Link>
        </div>
    );
}

const CreateCategory = ({categorys}) =>{
    return(
        <>
            {categorys.map((category)=>(
                <Category category={category} key={category.id}/>
            ))}
        </>
    );
}

export default CreateCategory;