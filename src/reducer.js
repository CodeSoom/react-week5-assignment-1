function reducer(state, action) {
  if (action.type === 'changeSelectedRegion') {
    return ({
      ...state,
      selectedRegionID: action.payload.id,
    });
  }

  return state;
}

export default reducer;
