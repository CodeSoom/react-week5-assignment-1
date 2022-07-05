const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectedRegion: null,
  selectedCategory: null,
};

const actionHandlers = {
  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  setRestaurants: (state, action) => {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },
  selectRegion: (state, action) => {
    const { region } = action.payload;

    return {
      ...state,
      selectedRegion: region,
    };
  },
  selectCategory: (state, action) => {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategory: category,
    };
  },
};

const reducer = (state = initialState, action) => {
  if (!actionHandlers[action.type]) {
    return state;
  }

  return actionHandlers[action.type](state, action);
};

export default reducer;
