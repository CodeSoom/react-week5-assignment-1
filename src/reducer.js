function reducer(state, action) {
  if (action.type === 'updateSelectedLocation') {
    return ({
      ...state,
      selectedlocationname: action.payload.locationName,
    });
  }

  return state;
}

export default reducer;
