import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import RestaurantStore from './store';

import App from './App';

ReactDOM.render(
  <Provider store={RestaurantStore}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
