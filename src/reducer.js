const initialState = {
  regions: [],
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  return ({
    setRegions: payload,
  }[type]) || state;
}

export default reducer;
