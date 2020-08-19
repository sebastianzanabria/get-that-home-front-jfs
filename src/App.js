import React from 'react';
import ThemeProvider from "@chakra-ui/core/dist/ThemeProvider";
import Routes from './Routes'
import {CSSReset} from '@chakra-ui/core'
import {Global, css} from "@emotion/core";
import theme from './theme'

function App() {
  return (
      <ThemeProvider theme={theme}>
          <CSSReset/>
          <Routes/>
      </ThemeProvider>
  );
}

export default App;
