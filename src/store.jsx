import { createStore } from 'redux';

const initialState = {
  regions: [],
  regionClicked: '',
};

function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'regionClick') {
    return {
      ...state,
      regionClicked: action.payload.id,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
