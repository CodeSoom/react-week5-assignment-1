const initialState = {
  regions: [],
  region: { id: '', name: '' },
  selectedRegion: '',
  categories: [],
  category: { id: '', name: '' },
  selectedCategory: '',
};

const reducers = {
  setRegions: (state, action) => {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  },
  selectRegion: (state, action) => ({
    ...state,
    selectedRegion: action.payload.selectedRegion,
  }),
  setCategories: (state, action) => {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  },
  selectCategory: (state, action) => ({
    ...state,
    selectedCategory: action.payload.selectedCategory,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || !reducers[action.type]) {
    return state;
  }
  return reducers[action.type](state, action);
}
