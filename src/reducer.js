const initialState = {
  regions: [],
  categories: [],
  checked: {
    region: 0,
    category: 0,
  },
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
  checkRegion: (state, { id }) => ({
    ...state,
    checked: {
      ...state.checked,
      region: id,
    },
  }),
  checkCategory: (state, { id }) => ({
    ...state,
    checked: {
      ...state.checked,
      category: id,
    },
  }),
};

export default function reducer(state = initialState, action) {
  return handlers[action.type] ? handlers[action.type](state, action.payload) : state;
}
