const initialState = {
  regions: [],
  categories: [],
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
};

function defaultReducer(state) {
  return state;
}

export default function reducer(state = initialState, action) {
  return (reducers[action.type] || defaultReducer)(state, action);
}
