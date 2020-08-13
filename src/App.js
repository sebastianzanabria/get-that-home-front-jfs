import React from "react";
import "./App.css";
import PropertyList from "./features/properties/PropertyList";
import { Container } from "./sytles/general";

function App() {
  return (
    <Container>
      <PropertyList />
    </Container>
  );
}

export default App;
