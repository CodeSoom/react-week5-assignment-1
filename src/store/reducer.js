import {
  CHANGE_CATEGORY, CHANGE_REGION, SET_CATEGORIES, SET_REGIONS,
} from './actions';
import { identity } from '../lib';

export const initialState = {
  selected: {
    regionName: null,
    categoryId: null,
  },
  regions: [],
  categories: [],
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
};

function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || identity)(state, action);
}

export default reducer;
