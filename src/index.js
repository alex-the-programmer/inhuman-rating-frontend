import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { applyMiddleware, createStore } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk'
import registerServiceWorker from './registerServiceWorker';

import reducer from './store/reducer';
const store = createStore(reducer, applyMiddleware(logger, thunk));

const app = (
    <Provider store={store}>
      <App />
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
