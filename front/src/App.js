import React from 'react';
import AppLayout from "./components/AppLayout";
import {Switch,Route} from 'react-router-dom';

const App = () => {
    return(
        <Switch>
            <Route exact path="/" component={AppLayout}/>
        </Switch>
    );
};

export default App;
