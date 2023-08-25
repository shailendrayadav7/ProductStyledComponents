
import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure to import BrowserRouter
import { Provider } from 'react-redux';

import App from './app/App'; // Adjust the import path as needed
import './index.css';
import store from './store/store';

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}> 
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);


