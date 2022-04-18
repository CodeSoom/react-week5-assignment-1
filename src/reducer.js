const initialState = {
  locations: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setLocations') {
    const { locations } = action.payload;

    return {
      ...state,
      locations,
    };
  }

  return {};
}
