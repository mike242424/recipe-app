import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import promise from 'redux-promise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import Header from './components/header';
import RandomResults from './containers/random-results';
import SearchResults from './containers/search-results';
import RecipePage from './components/recipe-page';
import HomePage from './components/home';
import NotFound from './components/not-found';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
      <React.StrictMode>
        <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/search" element={<SearchResults />} />
              <Route path="/random" element={<RandomResults />} />
              <Route path="/:id" element={<RecipePage />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Container>
        </BrowserRouter>
      </React.StrictMode>
  </Provider>
);
