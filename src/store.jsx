import { createStore } from 'redux';

const initialState = {
  regions: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
