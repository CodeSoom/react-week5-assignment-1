const initialState = {
  regions: [],
  selectRegion: null,
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'selectRegion') {
    const { regions } = state;
    const { regionId } = action.payload;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === regionId),
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'selectCategory') {
    const { categories } = state;
    const { categoryId } = action.payload;
    return {
      ...state,
      selectedCategory: categories.find((category) => category.id === categoryId),
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;
    return {
      ...state,
      restaurants,
    };
  }

  return state;
}
