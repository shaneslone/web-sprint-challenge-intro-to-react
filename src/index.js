import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import img from './images.sw-bg.jpg';
import App from './App';
import styled from 'styled-components';

const StyledApp = styled.div`
  margin: 0;
  padding: 0;
  font-family: sans-serif;
  /* background-image: url(url); */
  /* background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;*/
`; 

ReactDOM.render(<StyledApp><App /></StyledApp>, document.getElementById('root'));
