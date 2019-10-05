import React from 'react';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import Header from './components/header';


const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
          <div>
              <Header />
          </div>
    </ ThemeProvider>
  );
}

export default App;
