const reducers = {
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  setRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
};

export default reducers;
