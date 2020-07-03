const initialRegion = {
  id: '',
  name: '',
};

const initialState = {
  regions: [],
  region: { initialRegion },
  selectedRegion: '',
};

const reducers = {
  setRegions: (state, action) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  selectRegion: (state, action) => ({
    ...state,
    selectedRegion: action.payload.selectedRegion,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
