const initialState = {
  selectedRegionId: 0,
  regions: [],
};

const reducers = {
  setRegions: (state, payload) => ({
    ...state,
    regions: payload.regions,
  }),
  selectRegion: (state, payload) => ({
    ...state,
    selectedRegionId: payload.id,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  const { type, payload } = action;

  return reducers[type](state, payload);
}
