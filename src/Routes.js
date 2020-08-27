import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from "react";
import PropertyDetails from "./features/PropertyDetails/PropertyDetails";


export default function Routes(){
    return (
        <Router>
            <Switch>
                <Route path='/products/:id'  component={PropertyDetails}/>
            </Switch>
        </Router>
    );
}