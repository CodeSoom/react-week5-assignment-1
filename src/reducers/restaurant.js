import { TYPES } from '../actions/restaurant';

export const initialState = {
  regions: [],
};

export default function restaurantReducer(state = initialState, { type, payload } = {}) {
  if (type === TYPES.LOAD_REGIONS) {
    return {
      ...state,
      regions: payload.regions,
    };
  }

  return initialState;
}
