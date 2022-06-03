const initialState = {
  selectedCategoryId: null,
  selectedRegionId: null,
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
    selectCategoryId: {
      ...state,
      selectedCategoryId: payload?.selectCategoryId,
    },
    selectRegionId: {
      ...state,
      selectedRegionId: payload?.selectRegionId,
    },
  }[type]) || state;
}

export default reducer;
