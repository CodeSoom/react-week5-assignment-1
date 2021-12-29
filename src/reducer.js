const initialState = {
  locations: [],
  location: '',
};

const actions = {
  setLocation: (state, payload) => ({
    ...state,
    location: payload.location,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  const { type, payload } = action;

  return actions[type](state, payload);
}
