import { ACTION_TYPES } from './actions';

const initialState = {
  regions: [],
  categories: [],
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
  return state;
}
