const initialState = {
  newId: 100,
  name: '',
  category: '',
  address: '',
  regionName: '',
  categoryId: -1,
  restaurants: [],
  categories: [],
  regions: [],
};

export default function reducer({
  state = initialState,
  action,
}) {
  if (action.type === 'addRestaurant') {
    if (!action.payload.name
      || !action.payload.category
      || !action.payload.address) {
      return state;
    }

    return {
      ...state,
      name: '',
      category: '',
      address: '',
      newId: state.newId + 1,
      restaurants: [
        ...state.restaurants,
        {
          id: state.newId,
          name: action.payload.name,
          category: action.payload.category,
          address: action.payload.address,
        }],
    };
  }

  if (action.type === 'deleteRestaurant') {
    return {
      ...state,
      restaurants: state.restaurants.filter((item) => item.id !== action.payload.id),
    };
  }

  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  if (action.type === 'updateName') {
    return {
      ...state,
      name: action.payload.name,
    };
  }

  if (action.type === 'updateCategory') {
    return {
      ...state,
      category: action.payload.category,
    };
  }

  if (action.type === 'updateAddress') {
    return {
      ...state,
      address: action.payload.address,
    };
  }

  if (action.type === 'updateRegionName') {
    const { regionName } = action.payload;
    return {
      ...state,
      regionName,
    };
  }

  if (action.type === 'updateCategoryId') {
    const { categoryId } = action.payload;
    return {
      ...state,
      categoryId,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
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
