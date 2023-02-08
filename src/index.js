import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import React from 'react';
import ReactDOM from 'react-dom/client';
import promise from 'redux-promise';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import reducers from './reducers';

import Header from './containers/Header';
import RandomResults from './containers/RandomResults';
import SearchResults from './containers/SearchResults';
import HomePage from './components/Home';
import NotFound from './components/NotFound';
import ViewSelectedRandomRecipe from './containers/ViewSelectedRandomRecipe';
import ViewSelectedSearchRecipe from './containers/ViewSelectedSearchRecipe';

import IngredientSearch from './containers/IngredientSearch';
import ViewSelectedIngredientSearchRecipe from './containers/ViewSelectedIngredientSearchRecipe';

import { composeWithDevTools } from 'redux-devtools-extension';


const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={createStoreWithMiddleware(reducers, composeWithDevTools())}>
      {/* <React.StrictMode> */}
        <BrowserRouter>
          <Header />
          <Container>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route exact path="/search" element={<SearchResults />} />
              <Route path="/search/:id" element={<ViewSelectedSearchRecipe />} />
              <Route exact path="/random" element={<RandomResults />} />
              <Route path="/random/:id" element={<ViewSelectedRandomRecipe />} />
              <Route path="*" element={<NotFound />} />
              <Route path="/ingredientsearch" element={<IngredientSearch />} />
              <Route path="/ingredientsearch/:id" element={ViewSelectedIngredientSearchRecipe} />
            </Routes>
          </Container>
        </BrowserRouter>
      {/* </React.StrictMode> */}
  </Provider>
);
