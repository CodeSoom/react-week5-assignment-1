import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';

import App from './App';

import store from './store';

const app = ReactDOM.createRoot(document.getElementById('app'));
app.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
