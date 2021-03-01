const intialState = {
  newId: 100,
  restaurants: [],
  restaurant: {
    name: '',
    category: '',
    address: '',
  },
  categories: [],
  selectedCatId: 0,
  regions: [],
  selectedRegionId: 0,
};

export default function reducer(state = intialState, action = {}) {
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
  if (action.type === 'addRestaurant') {
    const { newId, restaurants, restaurant } = state;
    return {
      ...state,
      newId: newId + 1,
      restaurants: [...restaurants, { ...restaurant, id: newId }],
      restaurant: {
        name: '',
        category: '',
        address: '',
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
  if (action.type === 'setSelectedCatId') {
    const { id } = action.payload;
    return {
      ...state,
      selectedCatId: id,
    };
  }
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }
  if (action.type === 'setSelectedRegionId') {
    const { id } = action.payload;
    return {
      ...state,
      selectedRegionId: id,
    };
  }

  return state;
}
