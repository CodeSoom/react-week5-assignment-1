const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    place: '',
  },
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = state;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'putRestaurantField') {
    const { name, value } = action.payload;

    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'addRestaurant') {
    const { newId, restaurants, restaurant } = state;

    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { id: newId, restaurant }],
      restaurant: {
        name: '',
        category: '',
        place: '',
      },
    };
  }

  return state;
}
