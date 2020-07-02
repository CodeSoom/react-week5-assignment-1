const initialState = {
  regions: [],
  categories: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'selectRegion') {
    const { regionName } = action.payload;

    return {
      ...state,
      regionName,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'selectCategory') {
    const { categoryId } = action.payload;

    return {
      ...state,
      categoryId,
    };
  }

  return state;
}

export default reducer;
