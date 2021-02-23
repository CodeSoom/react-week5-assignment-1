const initialState = {
  selectedRegionID: 0,
  regions: [],
};
const reducers = {
  changeSelectedRegion: (state, { payload: { id } }) => ({
    ...state,
    selectedRegionID: id,
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
};

function reducer(state = initialState, action) {
  return reducers[action.type](state, action);
}

export default reducer;
