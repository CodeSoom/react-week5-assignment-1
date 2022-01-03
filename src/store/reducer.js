import { ACTION_TYPES } from './actions';

export const initialState = {
  regions: [],
  categories: [],
  filter: {
    region: null,
    category: null,
  },
  restaurants: [],
};

const reducersMap = {
  [ACTION_TYPES.SET_REGIONS]: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
  [ACTION_TYPES.SET_CATEGORIES]: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  [ACTION_TYPES.SET_FILTER]: (state, action) => ({
    ...state,
    filter: action.payload.filter,
  }),
  [ACTION_TYPES.SET_RESTAURANTS]: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  return reducersMap[action.type]
    ? reducersMap[action.type](state, action)
    : state;
}
