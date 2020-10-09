import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme'

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  background-image: url(${pr => pr.theme.backgroundImg});
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 100vh;
`; 

ReactDOM.render(<ThemeProvider theme={theme}><StyledApp><App /></StyledApp></ThemeProvider>, document.getElementById('root'));
