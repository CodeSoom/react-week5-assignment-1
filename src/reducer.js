const initialState = {
  regions: [],
  categories: [],
};

const reducers = {
  setRegions: ({ state, action }) => ({
    ...state,
    regions: action.payload.regions,
  }),
  setCategories: ({ state, action }) => ({
    ...state,
    categories: action.payload.categories,
  }),
};

function reducer(state = initialState, action) {
  return (
    reducers[action.type]
      ? reducers[action.type]({ state, action })
      : state);
}

export default reducer;
