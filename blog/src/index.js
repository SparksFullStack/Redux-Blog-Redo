import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import promise from 'redux-promise';
import logger from 'redux-logger';

import App from './components/app';
import reducers from './reducers';
import rootReducer from './reducers';

const createStoreWithMiddleware = createStore(rootReducer, applyMiddleware(promise, logger));

ReactDOM.render(
  <Provider store={createStoreWithMiddleware}>
    <Router>
      <App />
    </Router>
  </Provider>
  , document.querySelector('.container'));
