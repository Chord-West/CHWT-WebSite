import React from 'react';
import {Link} from "react-router-dom";

const CreateCategory = ({categorys}) =>{
    return(
        <>
            {categorys.map((category)=>(
                <div>
                    <Link to={category.name}>
                        <span>{category.name}</span>
                    </Link>
                </div>

            ))}
        </>
    );
}

export default CreateCategory;