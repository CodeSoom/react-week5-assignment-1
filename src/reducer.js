const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
  selectedlocationname: '',
  selectedcategoryname: '',
};

function reducer(state = initialState, action) {
  if (action.type === 'updateSelectedLocation') {
    const { selectedlocationname } = action.payload;
    return ({
      ...state,
      selectedlocationname,
    });
  }

  if (action.type === 'updateSelectedCategory') {
    const { selectedcategoryname } = action.payload;
    return ({
      ...state,
      selectedcategoryname,
    });
  }

  if (action.type === 'setLocations') {
    const { locations } = action.payload;
    return ({
      ...state,
      locations,
    });
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return ({
      ...state,
      categories,
    });
  }

  return state;
}

export default reducer;
