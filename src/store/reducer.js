import {
  CHANGE_CATEGORY, CHANGE_REGION, SET_CATEGORIES, SET_REGIONS, SET_RESTAURANTS,
} from './actions';
import { identity } from '../lib';

export const initialState = {
  selected: {
    regionName: null,
    categoryId: null,
  },
  regions: [],
  categories: [],
  restaurants: [],
};

const reducers = {
  [CHANGE_REGION]: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      regionName: action.payload.regionName,
    },
  }),
  [CHANGE_CATEGORY]: (state, action) => ({
    ...state,
    selected: {
      ...state.selected,
      categoryId: action.payload.categoryId,
    },
  }),
  [SET_REGIONS]: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
  [SET_CATEGORIES]: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  [SET_RESTAURANTS]: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
};

function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || identity)(state, action);
}

export default reducer;
