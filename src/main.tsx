// import React from 'react';
// import ReactDOM from 'react-dom';
// import { Provider } from 'react-redux'; // Import the Provider
// import { BrowserRouter } from 'react-router-dom';
// import { createRoot } from 'react-dom/client';
// import App from './app/App';
// import store from './store/store'; // Import your Redux store src\store\store.ts
// import './index.css';

// createRoot(document.getElementById('root')!).render(
//   <Provider store={store}>
//     <BrowserRouter>
//       <App />
//     </BrowserRouter>
//   </Provider>,
// );


import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Make sure to import BrowserRouter

import App from './app/App'; // Adjust the import path as needed
import './index.css';

createRoot(document.getElementById('root')!).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);


