const reducers = {
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  setRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
  setRestaurants: (state, action) => ({
    ...state,
    restaurants: action.payload.restaurants,
  }),
};

export default reducers;
