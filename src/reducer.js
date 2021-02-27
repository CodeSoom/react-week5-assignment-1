const initialState = {
  regions: [],
  selectedRegion: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  selectRegion(state, { payload: { region } }) {
    return {
      ...state,
      selectedRegion: region,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = { type: '' }) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
