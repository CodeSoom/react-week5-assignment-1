import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import restaurantReducer from './reducers/restaurant';

const rootReducer = combineReducers({ restaurant: restaurantReducer });

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
