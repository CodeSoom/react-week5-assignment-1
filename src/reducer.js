import {
  regions,
} from '../fixtures/staticData';

const initialState = {
  regions,
  addresses: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (!action) return state;
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }
  return state;
}
