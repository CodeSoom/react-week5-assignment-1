const initialState = {
  regions: [],
  categories: [],
};

const reducers = {
  setRegions(state, action) {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  setCategories(state, action) {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
