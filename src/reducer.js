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

  return state;
}

export default reducer;
