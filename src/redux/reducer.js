const initialState = {
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
  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
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

  return state;
}
