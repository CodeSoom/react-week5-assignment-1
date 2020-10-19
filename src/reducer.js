import {
  SET_REGIONS,
  SET_CATEGORIES,
  SET_SELECTED_REGION,
  SET_SELECTED_CATEGORY,
} from './actions';

const initialState = {
  regions: [],
  categories: [],
  selectedRegion: {},
  selectedCategory: {},
  restaurants: [],
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

  if (action.type === SET_SELECTED_REGION) {
    return {
      ...state,
      selectedRegion: action.payload,
    };
  }

  if (action.type === SET_SELECTED_CATEGORY) {
    return {
      ...state,
      selectedCategory: action.payload,
    };
  }

  if (action.type === 'SET_RESTAURANTS') {
    return {
      ...state,
      restaurants: action.payload,
    };
  }

  return state;
}
