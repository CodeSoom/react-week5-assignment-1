const initialState = {
  locations: [],
  categories: [],
  restaurants: [],
  locationId: '',
  categoryId: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setLocations') {
    const { locations } = action.payload;

    return {
      ...state,
      locations,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  if (action.type === 'selectLocation') {
    const { id } = action.payload;

    return {
      ...state,
      locationId: id,
    };
  }

  if (action.type === 'selectCategory') {
    const { id } = action.payload;

    return {
      ...state,
      categoryId: id,
    };
  }

  return state;
}
