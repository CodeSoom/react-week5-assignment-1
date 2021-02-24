import { createStore } from 'redux';

const initialState = {
  regions: [],
  categories: [],
  regionClicked: '',
  categoryClicked: '',
};

function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'regionClick') {
    return {
      ...state,
      regionClicked: action.payload.id,
    };
  }

  if (action.type === 'categoryClick') {
    return {
      ...state,
      categoryClicked: action.payload.id,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
