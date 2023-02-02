import 'bootstrap/dist/css/bootstrap.min.css';
import css from './app.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import promise from 'redux-promise';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import App from './components/app';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  }
]);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <React.StrictMode>
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </React.StrictMode>,
  </Provider>
);
