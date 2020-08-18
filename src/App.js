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
import Footer from "./features/shared/Footer";
import Header from "./features/shared/Header";

function App() {
  return (
    <Router>
      <Container>
        <Header />
      </Container>
      <Container>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/properties" />
          </Route>
          <Route path="/properties" exact component={PropertyList} />
          <Route path="/properties/:id" component={PropertyPage} />
          <Route path="*" render={() => <div>page not found</div>} />
        </Switch>
      </Container>
      <Footer />
    </Router>
  );
}

export default App;
