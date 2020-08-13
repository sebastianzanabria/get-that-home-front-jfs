import React from "react";
import "./App.css";
import PropertyList from "./features/properties/PropertyList";
import { Container } from "./sytles/general";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PropertyPage from "./features/properties/PropertyPage";

function App() {
  return (
    <Container>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/properties" />
          </Route>
          <Route path="/properties" exact component={PropertyList} />
          <Route path="/properties/:id" component={PropertyPage} />

          <Route path="*" render={() => <div>page not found</div>} />
        </Switch>
      </Router>
    </Container>
  );
}

export default App;
