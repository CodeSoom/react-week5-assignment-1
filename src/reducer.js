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
};

export default function reducer(state = initialState, action = {}) {
  const reduce = reducers[action.type];

  if (!reduce) {
    return state;
  }

  return reduce(state, action);
}
