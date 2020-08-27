import React from "react";
import "./App.css";
import { Container, MainApp } from "./sytles/general";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import PropertiesPage from "./features/pages/PropertiesPage";
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
          <Route path="/" exact component={Home}></Route>
          <Container>
            <Route path="/properties" exact component={PropertiesPage} />
            <Route path="/properties/:id" render={() => <div>page item</div>} />
            {/* <Route path="*" render={() => <div>page not found</div>} /> */}
          </Container>
        </Switch>
        <Footer />
      </Router>
    </MainApp>
  );
}

export default App;
