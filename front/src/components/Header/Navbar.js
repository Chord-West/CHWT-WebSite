import React from 'react';

import styled from 'styled-components';
import NavContent from "./NavContent";

const Header = styled.div`
  background: #ffffff;
  height:70px;
  box-shadow:3px 6px 5px rgba(0, 0, 0, 0.25);
  margin-bottom: 10px;
`;

const Container = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  background:#ffffff;
  max-width:1440px;
  height:70px;
  margin: 0 auto;
  width:1440px;
`;


const links =[
    {
        id:1,
        link:'',
        name:'Home'
    },
    {
        id:2,
        link:'about',
        name:'About'
    },
    {
        id:3,
        link:'login',
        name:'Login'
    },
    {
        id:4,
        link:'signup',
        name:'SignUp'
    }
];

const Navbar = () => {
  return (
      <>
          <Header>
              <Container>
                  <span>

                  </span>
                  <div style={{marginRight:'50px',height:'70px',display:'flex',alignItems:'center'}}>
                      {links.map((link)=>(
                          <NavContent link={link} key={link.id}/>
                      ))}
                  </div>
              </Container>
          </Header>
      </>
  );
};

export default Navbar;