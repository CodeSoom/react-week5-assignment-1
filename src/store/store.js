import { applyMiddleware, createStore } from 'redux';
import reduxThunk from 'redux-thunk';

import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(reduxThunk));

export default store;
