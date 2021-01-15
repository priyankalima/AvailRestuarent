import React from 'react';
import { Redirect, Route, Switch} from "react-router-dom";
import Account from "./components/Account";
import Home from "./components/Home";
import Filter from "./components/Filter";

const App = () => {
        return (
            <div>
                <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/filter" component={Filter}/>
                <Route exact path="/account" component={Account}/>
                <Redirect to="/" />
        </Switch>,
                
            </div>
        );
    
};

export default App;