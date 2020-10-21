const initialState = {
  regions: [],
};

const reducers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducers[action.type]) {
    return state;
  }

  return reducers[action.type](state, action.payload);
}
