const initialState = {
  regions: [],
  categories: [],
};

const handlers = {
  setRegions: (state, { regions }) => ({
    ...state,
    regions: [...regions],
  }),
  setCategories: (state, { categories }) => ({
    ...state,
    categories: [...categories],
  }),
};

export default function reducer(state = initialState, action) {
  return handlers[action.type] ? handlers[action.type](state, action.payload) : state;
}
