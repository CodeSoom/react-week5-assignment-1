const initialState = {
  places: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setPlaces') {
    const { places } = action.payload;

    return {
      ...state,
      places,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }
  return state;
}
