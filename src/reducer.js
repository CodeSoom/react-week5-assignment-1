const initialState = {
  regions: [],
};

const reducers = {
  setRegions: ({ state, action }) => ({
    ...state,
    regions: action.payload.regions,
  }),
};

function reducer(state = initialState, action) {
  return (
    reducers[action.type]
      ? reducers[action.type]({ state, action })
      : state);
}

export default reducer;
