const initialState = {
  regions: [],
  categories: [],
  selectedRegion: null,
  selectedCategory: null,
};

const reducers = {
  setRegions(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },
  setCategories(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
  selectRegion(state, { payload: { regionId } }) {
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === regionId),
    };
  },
  selectCategory(state, { payload: { categoryId } }) {
    const { categories } = state;
    return {
      ...state,
      selectedCategory: categories.find((category) => category.id === categoryId),
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
