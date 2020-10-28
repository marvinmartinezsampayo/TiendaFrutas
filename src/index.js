import React from 'react';
import ReactDOM from 'react-dom';

// Main component:
import App from './App';

// Worker:
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
