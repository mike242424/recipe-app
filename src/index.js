import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import promise from 'redux-promise';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import Header from './components/header';
import RandomResults from './containers/random-results';
import SearchResults from './containers/search-results';
import RecipePage from './components/recipe-page';
import HomePage from './components/home';
import NotFound from './components/not-found';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />
  },
  {
    path: "/random",
    element: <RandomResults />
  },
  {
    path: "/search",
    element: <SearchResults />
  },
  {
    path: "/:id",
    element: <RecipePage />
  },
  {
    path: "*",
    element: <NotFound />
  },
]);

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <RouterProvider router={router} />
      <React.StrictMode>
        <BrowserRouter>
          <Header />
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);
