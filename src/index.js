import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import ThemeContext from './context/ThemeContext';
import './index.css';

ReactDOM.render(
  <ThemeContext>
    <App />
  </ThemeContext>,
  document.getElementById('root')
);
