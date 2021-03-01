const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
};

const reducers = {
  setRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
  selectRegion: (state, action) => ({
    ...state,
    selectedRegion: action.payload.region,
  }),
};

function reducer(state = initialState, action = { type: '' }) {
  return reducers[action.type]
    ? reducers[action.type](state, action)
    : state;
}

export default reducer;
