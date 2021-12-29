const initialState = {
  categories: [],
  regions: [],
  // restaurants: []
  // selectedCategory: '' || categoryName,
  selectedRegion: '',
};

const defaultReducer = (state) => state;

const reducers = {
  setCategories: (state, action) => {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },

  setRegions: (state, action) => {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },

  setSelectedRegion: (state, action) => {
    const { name } = action.payload;

    return {
      ...state,
      selectedRegion: name,
    };
  },
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
