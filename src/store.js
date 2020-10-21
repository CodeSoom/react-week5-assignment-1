import { createStore } from 'redux';

const initialState = {
  restaurants: [],
};

const store = createStore(initialState);

export default store;
