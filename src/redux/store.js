import { applyMiddleware, createStore } from 'redux';

import thunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore((state, action) => reducer({ state, action }), applyMiddleware(thunk));

export default store;
