<<<<<<< HEAD
import React from 'react';
import ReactDOM from 'react-dom/client'; 
import App from './App';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); 

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
=======
/* eslint-disable react/no-deprecated */
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <BrowserRouter>
    <App /> 
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
>>>>>>> 145d06d0c619f76956c8e0381e8e33025406188d
);
