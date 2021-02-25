const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  clicked: {},
};

const reducers = {
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions: { ...state.regions, ...regions },
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories: { ...state.categories, ...categories },
  }),
};

export default function reducer(state = initialState, action = { type: undefined }) {
  return reducers[action.type] ? reducers[action.type](state, action) : state;
}
