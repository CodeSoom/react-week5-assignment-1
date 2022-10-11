const initialState = {
  newId: 1,
  locations: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'fetchLocations') {
    return {
      ...state,
      locations: action.payload.locations,
    };
  }

  return state;
}
