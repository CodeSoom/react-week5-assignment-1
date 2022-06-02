const initialState = {
  regions: [],
  errorMessage: null,
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  return ({
    setRegions: payload,
    setErrorMessage: payload,
  }[type]) || state;
}

export default reducer;
