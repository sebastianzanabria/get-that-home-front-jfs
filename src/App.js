import React from "react";
import "./App.css";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import { CSSReset } from "@chakra-ui/core";
import theme from "./theme";
import PropertyDetails from "./features/PropertyDetails/PropertyDetails";
import { Container, MainApp } from "./sytles/general";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PropertiesPage from "./features/pages/PropertiesPage";
import Footer from "./features/shared/Footer";
import Header from "./features/shared/Header";
import Home from "./features/pages/Home";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CSSReset />
      <MainApp>
        <Router>
          <Container>
            <Header />
          </Container>
          <Switch>
            <Route path="/" exact component={Home} />
            <Container>
              <Route path="/properties" exact component={PropertiesPage} />
              <Route path="/properties/:id" component={PropertyDetails} />
              <Route path="*" render={() => <Home />} />
            </Container>
          </Switch>
          <Footer />
        </Router>
      </MainApp>
    </ThemeProvider>
  );
}

export default App;
