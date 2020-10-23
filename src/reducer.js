const initialState = {
  filter: {
    region: '',
    categoryId: 0,
  },
};

const reducers = {
  updateFilter: (state, { payload: { filter } }) => ({
    ...state,
    filter: {
      ...state.filter,
      ...filter,
    },
  }),
};

export default function reducer(state = initialState, action) {
  if (!action) {
    return state;
  }

  const { type } = action;
  return reducers[type](state, action);
}
