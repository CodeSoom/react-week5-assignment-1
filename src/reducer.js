const initialState = {
  regions: [],
  categories: [],
  selectedRestaurant: [],
  selectedRegionName: '',
  selectedCategoryId: '',
};

const reducers = {
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
  selectedRegion: (state, action) => {
    const { selectedRegionName } = action.payload;
    return {
      ...state,
      selectedRegionName,
    };
  },
  selectedCategory: (state, action) => {
    const { selectedCategoryId } = action.payload;
    return {
      ...state,
      selectedCategoryId,
    };
  },
  selectedRestaurant: (state, action) => {
    const { selectedRestaurant } = action.payload;
    return {
      ...state,
      selectedRestaurant,
    };
  },
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
