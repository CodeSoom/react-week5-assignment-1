const initialState = {
  regions: [],
  categories: [],
  errorMessage: null,
};

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  return ({
    setRegions: {
      ...state,
      regions: payload?.regions,
    },
    setErrorMessage: {
      ...state,
      errorMessage: payload?.errorMessage,
    },
    setCategories: {
      ...state,
      categories: payload?.categories,
    },
  }[type]) || state;
}

export default reducer;
