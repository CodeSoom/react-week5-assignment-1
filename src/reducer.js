const initialState = {
  locations: [],
  location: '',
};

const actions = {
  setLocation: (state, payload) => ({
    ...state,
    location: payload.location,
  }),
  setLocations: (state, payload) => ({
    ...state,
    locations: payload.locations,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action?.payload) {
    return state;
  }

  const { type, payload } = action;

  return actions[type](state, payload);
}
