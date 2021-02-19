import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import ex from "./ex";

const Post = () => {
    return(
        <div style={{color:"white"}}>
            PPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPPP
            <NavLink to='/post/:id'>11</NavLink>
            <Route path="/post/:id" component={ex}/>
        </div>
    );
}

export default Post;