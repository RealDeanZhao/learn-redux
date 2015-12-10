import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import App from './containers/App.jsx';
import todoApp from './reducers/reducers.jsx';

let store = createStore(todoApp);

console.log(__dirname);

let rootElement = document.getElementById('root');
render(
  <Provider store={ store } >
  <App />
  < /Provider>,
  rootElement
  )