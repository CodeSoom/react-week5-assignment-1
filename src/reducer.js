const initialState = {
  regions: [],
  categories: [],
  selectedRegion: [],
  selectedCategory: [],
  restaurants: [],
};

const reducers = {
  setRegions(state, action) {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },

  selectedRegion(state, action) {
    const { region } = action.payload;

    return {
      ...state,
      selectedRegion: region,
    };
  },

  setCategories(state, action) {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },

  selectedCategory(state, action) {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategory: category,
    };
  },
};

export default function reducer(state = initialState, action = {}) {
  const reduce = reducers[action.type];

  if (!reduce) {
    return state;
  }

  return reduce(state, action);
}
