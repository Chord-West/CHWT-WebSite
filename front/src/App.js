import React from 'react';
import About from './routes/About';
import {Switch,Route} from 'react-router-dom';
import Category from "./components/Aside/Category";
import styled from 'styled-components';
import Home from "./routes/Home";
import Navbar from "./components/Header/Navbar";
import Login from "./routes/Login";
import SignUp from "./routes/SignUp";

const Frame = styled.div`
  background: #DFE6ED;
  height: 900px;
  max-width: 1440px;
  width: 1440px;
  margin: 0 auto;
  display: flex;
`;
const Aside = styled.div`
  background : #3C4B5A;
  width : 250px;
  height:1000px;
`

const App = () => {
    return(
        <>
            <Navbar/>
            <div style={{display:"flex"}}>
                <Frame>
                    <Aside>
                        <Category/>
                    </Aside>
                    <div style={{width:'1200px',background:'wheat'}}>
                        <div style={{marginTop:'50px',width:'1000px',margin:'0 auto'}}>
                            <Switch>
                                <Route exact={true} path="/" component={Home}/>
                                <Route path="/about" component={About}/>
                                <Route path="/login" component={Login}/>
                                <Route path="/signup" component={SignUp}/>
                            </Switch>
                        </div>
                    </div>
                </Frame>
            </div>
        </>
    );
};

export default App;
