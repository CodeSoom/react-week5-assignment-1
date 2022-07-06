const initialState = {
  isLoading: true,
  regions: [],
  categories: [],
};

const reducerAction = {
  getRegions: (state, action) => ({
    ...state,
    regions: action.payload.regions,
  }),

  getCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
};

export default function reducer(state = initialState, action) {
  if (!reducerAction[action.type]) {
    return state;
  }

  return reducerAction[action.type](state, action);
}
