const reducer = (state, action) => {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  return state;
};

export default reducer;
