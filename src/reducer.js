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

export default function reducer(state = initialState, action) {
  return reducers[action.type](state, action);
}
