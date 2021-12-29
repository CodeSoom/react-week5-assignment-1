import { ACTION_TYPES } from './actions';

const initialState = {
  regions: [],
  categories: [],
  filter: {
    region: null,
    category: null,
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === ACTION_TYPES.SET_REGIONS) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }
  if (action.type === ACTION_TYPES.SET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }
  if (action.type === ACTION_TYPES.SET_FILTER) {
    return {
      ...state,
      filter: {
        region: action.payload.region,
        category: action.payload.category,
      },
    };
  }

  return state;
}
