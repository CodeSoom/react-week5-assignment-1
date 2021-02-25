import { createStore } from 'redux';

const initialState = {
  regions: [],
  categories: [],
  regionName: '',
  categoryId: '',
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
      regionName: action.payload.regionName,
    };
  }

  if (action.type === 'categoryClick') {
    return {
      ...state,
      categoryId: action.payload.categoryId,
    };
  }

  return state;
}

const store = createStore(reducer);

export default store;
