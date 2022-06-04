const initialState = {
  selectedCategoryId: null,
  selectedRegion: null,
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
    selectRegion: {
      ...state,
      selectedRegion: payload?.selectRegion,
    },
  }[type]) || state;
}

export default reducer;
