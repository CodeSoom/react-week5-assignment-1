const initialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    place: '',
  },
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants, restaurant } = state;

    return {
      ...state,
      restaurants: [...restaurants, restaurant],
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

  if (action.type === 'putInputField') {
    const { name, value, restaurant } = action.payload;

    return {
      ...state,
      restaurant: {
        ...restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'loadCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  return state;
}
