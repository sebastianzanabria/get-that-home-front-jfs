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
import Home from "./features/pages/Home";

function App() {
  return (
    <MainApp>
      <Router>
        <Container>
          <Header />
        </Container>
        <Switch>
          <Route path="/" exact component={Home}>
            {/* <Redirect to="/properties" /> */}
          </Route>
          <Container>
            <Route path="/properties" exact component={PropertiesPage} />
            <Route path="/properties/:id" component={PropertiesPage} />
            <Route path="*" render={() => <div>page not found</div>} />
          </Container>
        </Switch>
        <Footer />
      </Router>
    </MainApp>
  );
}

export default App;
