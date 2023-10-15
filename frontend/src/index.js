import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import DrfApiFetch from './components/DrfApiFetch';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    <App />
    <DrfApiFetch />
  </div>
);
