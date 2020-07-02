import { createStore, applyMiddleware } from 'redux';

import thank from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thank));

export default store;
