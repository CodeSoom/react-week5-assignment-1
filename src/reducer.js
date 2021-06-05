const initialState = {
  regions: [],
  categories: [],
};

const reducers = {
  setRegion(state, { payload: { regions } }) {
    return {
      ...state,
      regions,
    };
  },

  setCategorie(state, { payload: { categories } }) {
    return {
      ...state,
      categories,
    };
  },
};

export default function reducer(state = initialState, action) {
  return reducers[action.type](state, action);
}
