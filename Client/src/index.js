import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import Routes from './routes/index';
import store from './store';
import '../public/styles/index.css';

render(
  <Provider store={store}>
    <Routes />
  </Provider>,
  document.getElementById('root')
);
