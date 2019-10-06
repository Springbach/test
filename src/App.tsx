import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navbar from './components/navbar';
import { Routes } from './router/router';
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from './store'



const App: React.FC = () => {
  return (
    <ThemeProvider theme={ theme }>
        <Store>
            <Router>
              <Navbar />
              <Routes />
            </Router>
        </Store>
    </ ThemeProvider>
  );
}

export default App;
