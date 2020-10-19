import {
  SET_REGIONS,
  SET_CATEGORIES,
} from './actions';

const initialState = {
  regions: [],
  categories: [],
  region: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_REGIONS) {
    return {
      ...state,
      regions: action.payload,
    };
  }

  if (action.type === SET_CATEGORIES) {
    return {
      ...state,
      categories: action.payload,
    };
  }

  if (action.type === 'SET_REGION') {
    return {
      ...state,
      region: action.payload,
    };
  }

  return state;
}
