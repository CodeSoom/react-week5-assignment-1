import { SET_REGIONS } from './actions';

const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === SET_REGIONS) {
    return {
      ...state,
      regions: action.payload,
    };
  }

  if (action.type === 'SET_CATEGORIES') {
    return {
      ...state,
      categories: action.payload,
    };
  }

  return state;
}
