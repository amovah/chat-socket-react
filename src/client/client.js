import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import io from 'socket.io-client';
import bind from './bind';
import store from './store';

const socket = io();

global.shared = { bind, socket };

let App = require('./components/App');

window.onload = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main')
  );
};
