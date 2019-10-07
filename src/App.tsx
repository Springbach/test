import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navbar from './components/navbar';
import { Routes } from './router/router';
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from './store'
import { createGlobalStyle } from 'styled-components';

const GlobalStyleInject = createGlobalStyle`
    html {
      width: 100%;
      height: 100%;
    }

    body {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(45deg, rgba(66, 183, 245, 0.8) 0%, rgba(66, 245, 189, 0.4) 100%);
      color: rgba(0, 0, 0, 0.6);
      font-family: "Roboto", sans-serif;
      font-size: 14px;
      line-height: 1.6em;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }
    #root {
      position: relative;
      width: 100%;
      height: 100%;
    }
`;


const App: React.FC = () => {
  return (
    <ThemeProvider theme={ theme }>
        <Store>
            <Router>
              <Navbar />
              <Routes />
              <GlobalStyleInject/>
            </Router>
        </Store>
    </ ThemeProvider>
  );
}

export default App;
