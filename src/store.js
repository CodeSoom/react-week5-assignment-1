import { createStore, applyMiddleware } from 'redux';
import thuck from 'redux-thunk';
import reducer from './reducer';

const store = createStore(reducer, applyMiddleware(thuck));

export default store;
