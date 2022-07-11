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
  selectRegion: (state, action) => ({
    ...state,
    selectedRegion: action.payload.region,
  }),
  selectCategory: (state, action) => ({
    ...state,
    selectedCategory: action.payload.category,
  }),
};

export default reducers;
