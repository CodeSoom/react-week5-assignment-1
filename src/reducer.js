import initialState from './initialState';

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  selectedRegion(state, { payload: { region } }) {
    return {
      ...state,
      selectedRegion: region,
    };
  },

  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },

  selectedCategory(state, { payload: { category } }) {
    return {
      ...state,
      selectedCategoryId: category,
    };
  },

  setRestaurants(state, { payload: { restaurants } }) {
    return {
      ...state,
      restaurants,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const reduce = reducers[action.type];

  if (!reduce) {
    return state;
  }

  return reduce(state, action);
}
