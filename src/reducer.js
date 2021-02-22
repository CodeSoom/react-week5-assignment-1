const initialState = {
  regions: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }
  return state;
}

export default reducer;
