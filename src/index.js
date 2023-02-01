import 'bootstrap/dist/css/bootstrap.min.css';
import css from './app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import promise from 'redux-promise';

import reducers from './reducers';

import App from './components/app';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  </Provider>
);
