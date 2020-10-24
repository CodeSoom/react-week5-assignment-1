const initialState = {
  selectedRegionId: 0,
  regions: [],
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
  selectRegion: (state, { id }) => ({
    ...state,
    selectedRegionId: id,
  }),
};

export default function reducer(state = initialState, action = {}) {
  if (!reducers[action.type]) {
    return state;
  }

  const { type, payload } = action;

  return reducers[type](state, payload);
}
