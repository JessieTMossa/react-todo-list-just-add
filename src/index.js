// import react so we can use methods in this file
import React from 'react';
// import react-dom, another package we installed, the virtual DOM, important so we can refresh individual elements
import ReactDOM from 'react-dom';
// import index.css from src file
import './index.css';
// import App.js from src file
import App from './App';
// import reportWebVitals.js from src file
import reportWebVitals from './reportWebVitals';

// virtual DOM renders the App component into root (saw that root is in index.html in the class videos, but we don't seem to have that file here)
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// call reportWebVitals function
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
