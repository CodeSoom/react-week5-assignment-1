const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
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

  if (action.type === 'selectRegion') {
    const { region } = action.payload;

    return {
      ...state,
      selectedRegion: region,
    };
  }

  if (action.type === 'selectCategory') {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategory: category,
    };
  }

  return state;
};

export default reducer;
