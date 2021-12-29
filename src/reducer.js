const initialState = {
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    return {
      restaurants: action.payload.restaurants,
    };
  }

  return state;
}
