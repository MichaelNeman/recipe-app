import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const RECIPES = [
  {name: 'Recipe 1', ingredients: ['item 1', 'item 2', 'item 3'], instructions: 'string detailing recipe instructions'},
  {name: 'Recipe 2', ingredients: ['item 1', 'item 2', 'item 3'], instructions: 'string detailing recipe instructions'},
  {name: 'Recipe 3', ingredients: ['item 1', 'item 2', 'item 3'], instructions: 'string detailing recipe instructions'}
];

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
