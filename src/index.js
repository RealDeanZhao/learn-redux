import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import todoApp from './reducers';
import App from './containers/App';

let store = createStore(todoApp);
render (
  <Provider store={ store } >
    <App />
  < /Provider>,
  document.getElementById('root')
);
