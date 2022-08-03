const initialState = {
  regions: [],
  addresses: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (!action) return state;
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }
  return state;
}
