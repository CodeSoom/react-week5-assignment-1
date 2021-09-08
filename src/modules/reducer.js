const initialState = {
  places: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setPlaces') {
    const { places } = action.payload;

    return {
      ...state,
      places,
    };
  }
  return state;
}
