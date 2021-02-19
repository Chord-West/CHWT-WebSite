import React from 'react';
import {NavLink, Route, Switch} from "react-router-dom";
import styled from 'styled-components';
import Post from "./Post";

const Recent=styled.div`
    
`;

const Section = () => {
    return (
      <>
          <Recent>
              <Post/>
          </Recent>

      </>

    );
}

export default Section;