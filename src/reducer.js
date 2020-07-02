const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
  selectedCategoryId: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setSelectedRegion') {
    const { name } = action.payload;

    return {
      ...state,
      selectedRegion: name,
    };
  }

  if (action.type === 'setSelectedCategoryId') {
    const { id } = action.payload;

    return {
      ...state,
      selectedCategoryId: id,
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

  return state;
}
