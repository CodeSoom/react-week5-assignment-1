import { TYPES } from '../actions/restaurant';

export const initialState = {
  regions: [],
  categories: [],
};

export default function restaurantReducer(state = initialState, { type, payload } = {}) {
  if (type === TYPES.SET_REGIONS) {
    return {
      ...state,
      regions: payload.regions,
    };
  }

  if (type === TYPES.SET_CATEGORIES) {
    return {
      ...state,
      categories: payload.categories,
    };
  }

  return initialState;
}
