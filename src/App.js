import React from 'react';
import { Container, CssBaseline, ThemeProvider } from '@mui/material';
import { Navbar } from './components/Navbar';
import { darkTheme } from './themes/dark-theme';
import ItemDetailContainer from './components/ItemDetailContainer';
// import ItemListContainer from './components/ItemListContainer';
import './App.css';

function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline>
        <Navbar />
        <Container maxWidth='xl'>
          {/* <ItemListContainer /> */}
          <ItemDetailContainer />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;