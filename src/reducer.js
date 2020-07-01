const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  checked: {
    regionId: 0,
    categoryId: 0,
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
  setRestaurants: (state, { restaurants }) => ({
    ...state,
    restaurants: [...restaurants],
  }),
  checkRegion: (state, { id }) => ({
    ...state,
    checked: {
      ...state.checked,
      regionId: id,
    },
  }),
  checkCategory: (state, { id }) => ({
    ...state,
    checked: {
      ...state.checked,
      categoryId: id,
    },
  }),
};

export default function reducer(state = initialState, action) {
  return handlers[action.type] ? handlers[action.type](state, action.payload) : state;
}
