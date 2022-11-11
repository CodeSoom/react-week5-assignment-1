const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  selectedRegion: '',
  selectedCategoryId: null,
};

const actionCreators = {
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

  selectCategory: (state, action) => {
    const { category } = action.payload;

    return {
      ...state,
      selectedCategoryId: category,
    };
  },

  selectRegion: (state, action) => {
    const { selectedRegion } = action.payload;

    return {
      ...state,
      selectedRegion,
    };
  },
};

export default function reducer(state = initialState, action) {
  return !action || !actionCreators[action.type]
    ? state
    : actionCreators[action.type](state, action);
}
