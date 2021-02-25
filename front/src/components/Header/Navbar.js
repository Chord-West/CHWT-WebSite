import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar = () => {
  return (
      <>
          <div style={{height:'70px',background:'#ffffff',boxShadow:'3px 6px 5px rgba(0, 0, 0, 0.25)',marginBottom:'10px'}}>
              <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',background:'#ffffff',maxWidth:'1440px',height:'70px',margin:'0 auto',width:'1440px'}}>
                  <span>

                  </span>
                  <span style={{marginLeft:'200px'}}>
                    <NavLink to='/'>
                          Home
                      </NavLink>
                      <NavLink to='/about'>
                          About
                      </NavLink>
                  </span>
              </div>
          </div>
      </>
  );
};

export default Navbar;