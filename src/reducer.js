const initialState = {
  filter: {
    region: '',
    categoryId: 0,
  },
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
  setRestaurants: (state, { payload: { restaurants } }) => ({
    ...state,
    restaurants,
  }),
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }

  const { type } = action;
  return reducers[type](state, action);
}
