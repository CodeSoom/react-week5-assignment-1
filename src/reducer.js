const initialState = {
  restaurants: [],
  selectedlocationname: '',
  selectedcategoryname: '',
};

function reducer(state = initialState, action) {
  if (action.type === 'updateSelectedLocation') {
    return ({
      ...state,
      selectedlocationname: action.payload.locationName,
    });
  }

  if (action.type === 'updateSelectedCategory') {
    return ({
      ...state,
      selectedcategoryname: action.payload.categoryName,
    });
  }

  if (action.type === 'setLocations') {
    return ({
      ...state,
      locations: action.payload.locations,
    });
  }

  return state;
}

export default reducer;
