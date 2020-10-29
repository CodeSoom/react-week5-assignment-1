const initialState = {
  filter: {
    regionName: null,
    categoryId: null,
  },
  regions: [],
  categories: [],
  restaurants: [],
};

const reducers = {
  updateFilter: (state, { payload: { filter } }) => ({
    ...state,
    filter: {
      ...state.filter,
      ...filter,
    },
  }),
  setRegions: (state, { payload: { regions } }) => ({
    ...state,
    regions,
  }),
  setCategories: (state, { payload: { categories } }) => ({
    ...state,
    categories,
  }),
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action || action.type.indexOf('@@') > -1) {
    return state;
  }

  const { type } = action;
  return reducers[type](state, action);
}
