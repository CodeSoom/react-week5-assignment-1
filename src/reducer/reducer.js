const initialState = {
  locations: [],
};

const reducers = {
  setLocations: (state, payload) => ({
    ...state,
    locations: payload.locations,
  }),
};

export default function rootReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload);
  }

  return state;
}
