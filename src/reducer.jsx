const initialState = {
  regions: [],
  categories: [],
  regionName: '',
  categoryId: '',
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  if (action.type === 'regionSelect') {
    return {
      ...state,
      regionName: action.payload.regionName,
    };
  }

  if (action.type === 'categorySelect') {
    return {
      ...state,
      categoryId: action.payload.categoryId,
    };
  }

  return state;
}
