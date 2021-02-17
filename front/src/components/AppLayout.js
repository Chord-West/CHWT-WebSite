import React from 'react';
import styled from 'styled-components';
import Navbar from "./Navbar";
import Profile from "./Profile";

const Frame = styled.div`
  background: #FAFAFA;
  height: 900px;
`;

const AppLayout = () => {

    return(
          <Frame>
              <Navbar/>
              <div style={{background :'#001529', width : '200px', height:'100%'}}>
                  <Profile/>
              </div>
              <div>

              </div>
          </Frame>
    );
};

export default AppLayout;