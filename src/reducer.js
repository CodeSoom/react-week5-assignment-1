import { equal } from './utils';

export const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedCategory: null,
  selectedRegion: null,
};

const reducers = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),

  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),

  selectRegion: (state, { payload: { regionId } }) => {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find(equal('id', regionId)),
    };
  },
  selectCategory: (state, { payload: { categoryId } }) => {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find(equal('id', categoryId)),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
