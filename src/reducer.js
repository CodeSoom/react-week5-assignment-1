const initialState = {
  selectedRegionID: 0,
  regions: [],
};
const reducers = {
  changeSelectedRegion: (state, { payload: { id } }) => ({
    ...state,
    selectedRegionID: id,
  }),
  changeSelectedCategory: (state, { payload: { id } }) => ({
    ...state,
    selectedCategoryID: id,
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
};

function reducer(state = initialState, action) {
  return reducers[action.type](state, action);
}

export default reducer;
