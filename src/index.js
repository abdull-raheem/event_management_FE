import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
const root = document.getElementById('root');

const createRoot = (element) => {
  if (root !== null) {
    return ReactDOM.createRoot(root).render(element);
  }
};

const render = () => {
  const App = require('./App').default;
  createRoot(<React.StrictMode><App /></React.StrictMode>);
};

if (module.hot) {
  module.hot.accept('./App', render);
}

render();
