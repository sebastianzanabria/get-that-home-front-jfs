import React from "react";
import "./App.css";
import { Container, MainApp } from "./sytles/general";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PropertiesPage from "./features/properties/PropertiesPage";
import Footer from "./features/shared/Footer";
import Header from "./features/shared/Header";

function App() {
  return (
    <MainApp>
      <Router>
        <Container>
          <Header />
        </Container>
        <Container>
          <Switch>
            <Route path="/" exact>
              <Redirect to="/properties" />
            </Route>
            <Route path="/properties" exact component={PropertiesPage} />
            <Route path="/properties/:id" component={PropertiesPage} />
            <Route path="*" render={() => <div>page not found</div>} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </MainApp>
  );
}

export default App;
