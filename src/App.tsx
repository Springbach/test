import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navbar from './components/navbar';
import { routes } from './router/routes';
import { Routes } from './router/router';
import { BrowserRouter as Router } from "react-router-dom";
import { Store } from './store'


const AppState: any = {auth: true}

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ theme }>
        <Store>
        <Router>
          <Navbar links = { routes.links } auth= {AppState.auth}/>
          <Routes auth = { AppState.auth}/>
        </Router>
        </Store>
    </ ThemeProvider>
  );
}

export default App;
