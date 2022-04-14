import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Router from './Routers/Router';
import { dark, light } from './constants/theme';
import { GlobalStyle } from './constants/GlobalStyle';
import GlobalState from './global/GlobalState';

function App(props) {
 const [theme , setTheme] = useState(dark);
  
  return (
      <GlobalState>
      <ThemeProvider theme={theme}>
        <Router/>
        <GlobalStyle/>       
     </ThemeProvider> 
     </GlobalState>

  );
}

export default App;
