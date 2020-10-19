import { createStore } from 'redux';

function reducer(state, action) {
  return {
    restaurantRegions: [],
  };
}

const store = createStore(reducer);

export default store;
