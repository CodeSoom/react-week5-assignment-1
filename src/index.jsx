import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

const store = createStore(rootReducer)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app'),
);
