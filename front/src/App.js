import React from 'react';
import About from './components/About';
import {Switch,Route} from 'react-router-dom';
import Post from "./components/Section/Post";
import Category from "./components/Aside/Category";
import Section from "./components/Section";
import styled from 'styled-components';
import ex from "./components/Section/ex";


const Frame = styled.div`
  background: #DFE6ED;
  height: 900px;
  max-width: 1024px;
  margin: 0 auto;
  display: flex;
`;
const Aside = styled.div`
  background : #3C4B5A;
  width : 300px;
  height:1000px;
  display: flex;
  align-items: center;
`

const App = () => {
    return(
        <div style={{display:"flex"}}>
            <Aside>
                <Category/>
            </Aside>
            <Frame>
                <Switch>
                    <Route exact={true} path="/" component={Section}/>
                    <Route path="/about" component={About}/>
                    <Route path="/post" component={Post}/>
            </Switch>
            </Frame>
        </div>
    );
};

export default App;
