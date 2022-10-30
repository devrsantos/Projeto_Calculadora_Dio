import React from 'react';
import ReactDOM from 'react-dom/client';

import { GlobalStyle } from "./globalStyles";

import { App } from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);