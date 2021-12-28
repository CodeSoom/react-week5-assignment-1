const initialState = {
  locations: [],
  location: '',
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === 'setLocation') {
    return {
      ...state,
      location: action.payload.location,
    };
  }

  return state;
}
