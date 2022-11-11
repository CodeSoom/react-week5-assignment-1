const initialState = {
  regions: [],
  categories: [],
  selectedRestaurant: [],
  selectedRegion: '',
  selectedCategory: null,
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
    const { selectedRegion } = action.payload;
    return {
      ...state,
      selectedRegion,
    };
  },
  selectedCategory: (state, action) => {
    const { selectedCategory } = action.payload;
    return {
      ...state,
      selectedCategory,
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
