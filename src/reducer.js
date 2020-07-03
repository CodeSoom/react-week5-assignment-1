const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  categoryId: '',
  regionName: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }
  if (action.type === 'setCategoryId') {
    return {
      ...state,
      categoryId: action.payload.categoryId,
    };
  }
  if (action.type === 'setRegionName') {
    return {
      ...state,
      regionName: action.payload.regionName,
    };
  }
  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  return state;
}
