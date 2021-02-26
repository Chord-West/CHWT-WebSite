import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";
const NavContainer = styled.div`
  display: flex;
  margin-right: 20px;
  padding : 0px 20px 0px 20px;
  height: 70px;
  align-items: center;
  &:hover {
    background-color: #18A0FB;
  }
`;

const StyledLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: bolder;
  &:hover {
    color: white;
  }
`;

const NavContent = ({link}) => {
    return(
     <>
         <NavContainer>
             <StyledLink to={link.link}>
                 {link.name}
             </StyledLink>
         </NavContainer>
     </>
    )
};

export default NavContent;