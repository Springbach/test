import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Navbar from './components/navbar';
import { routes } from './router/routes';

const App: React.FC = () => {
  return (
    <ThemeProvider theme={ theme }>
          <Navbar links = { routes.links } auth= {true}/>
    </ ThemeProvider>
  );
}

export default App;
