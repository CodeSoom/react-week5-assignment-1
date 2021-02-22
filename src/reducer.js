function reducer(state, action) {
  if (action.type === 'changeSelectedRegion') {
    return ({
      ...state,
      selectedRegionID: action.payload.id,
    });
  }

  if (action.type === 'setRegions') {
    return ({
      ...state,
      regions: action.payload.regions,
    });
  }

  return state;
}

export default reducer;
