import initialState from '../../fixture/initialState';

function reducer(state = initialState, action = {}) {
  const { type, payload } = action;

  return ({
    setRegions: {
      ...state,
      regions: payload?.regions,
    },
    setErrorMessage: {
      ...state,
      errorMessage: {
        ...state.errorMessage,
        ...payload?.errorMessage,
      },
    },
    setCategories: {
      ...state,
      categories: payload?.categories,
    },
    setRestaurants: {
      ...state,
      restaurants: payload?.restaurants,
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
