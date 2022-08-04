import {
  regions,
  categories,
} from '../fixtures/staticData';

const initialState = {
  region: {},
  category: {},
  regions,
  categories,
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

  if (action.type === 'selectRegion') {
    return {
      ...state,
      region: regions.filter((region) => region.name === action.payload.regionName)[0],
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      category: action.payload.categories,
    };
  }

  if (action.type === 'selectCategory') {
    return {
      ...state,
      category: categories.filter((category) => category.name === action.payload.categoryName)[0],
    };
  }

  return state;
}
