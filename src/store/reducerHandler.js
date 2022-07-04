const reducers = {
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  setRegions: (state, action) => {

  },
};

export default reducers;
