import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import bind from './bind';
import store from './store';

global.shared = { bind };

let App = require('./components/App');

window.onload = () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('main')
  );
};
