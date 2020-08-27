import React from "react";
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import {CSSReset} from '@chakra-ui/core'
import theme from './theme'
import PropertyList from "./features/properties/PropertyList";
import PropertyDetails from './features/PropertyDetails/PropertyDetails'
import { Container, MainApp } from "./sytles/general";
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
      <ThemeProvider theme={theme}>
        <CSSReset/>
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
            <Route path="/properties" exact component={PropertyList} />
            <Route path="/properties/:id" component={PropertyDetails} />
            <Route path="*" render={() => <div>page not found</div>} />
          </Switch>
        </Container>
        <Footer />
      </Router>
    </MainApp>
      </ThemeProvider>
  );
}

export default App;
