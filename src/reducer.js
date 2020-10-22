const initialState = {
  selectedRegionId: 0,
  regions: [],
};

const reducers = {
  selectRegion: (state, action) => ({
    ...state,
    selectedRegionId: action.payload.id,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action);
}
