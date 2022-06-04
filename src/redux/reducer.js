const initialRestaurant = {
  categoryId: '',
  region: '',
};

const initialState = {
  restaurants: [],
  restaurant: initialRestaurant,
  categories: [],
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'changeRestaurantField') {
    const { name, value } = action.payload;
    return {
      ...state,
      restaurant: {
        ...state.restaurant,
        [name]: value,
      },
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  return state;
}
