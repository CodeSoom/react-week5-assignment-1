const initialState = {
  categories: [],
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
};

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
