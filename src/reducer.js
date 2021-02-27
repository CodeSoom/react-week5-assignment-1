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

  selectRegion(state, { payload: { region } }) {
    return {
      ...state,
      selectedRegion: region,
    };
  },

  selectCategory(state, { payload: { category } }) {
    return {
      ...state,
      selectedCategory: category,
    };
  },
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action = { type: '' }) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
