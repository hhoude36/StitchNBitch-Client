import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theRootElement = document.getElementById('root');
const theRoot = ReactDOM.createRoot(theRootElement);
// import { createTheme, ThemeProvider } from '@mui/material/styles';


const theme = createTheme({
    palette: {
      primary: {
        light: '#f261ff',
        main: '#bc25d8',
        dark: '#8700a6',
        contrastText: '#090909', 
      },
      secondary: {
        light: '#ffff81',
        main: '#f4df4f',
        dark: '#beae13',
        contrastText: '#090909',
      },
      // background: {
      //   paper: '#ffff81'
      // }
    },

  });

theRoot.render(
        <ThemeProvider theme={theme}>
                <App/>
        </ThemeProvider>

)


