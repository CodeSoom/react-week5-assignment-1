import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import reducer from './reducer';

const middleWares = [thunk];

const store = createStore(reducer, composeWithDevTools(applyMiddleware(...middleWares)));

export default store;
