const initialState = {
  selectedlocationname: '',
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

  return state;
}

export default reducer;
