import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom'
import GlobalStyle from './Styles/GlobalStyle'
ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle/>
    <Router>
    <App />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

