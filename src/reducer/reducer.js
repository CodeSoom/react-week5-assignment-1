const initialState = {
  categories: [],
};

const reducers = {
  setCategories: (state, payload) => ({
    ...state,
    categories: payload.categories,
  }),
};

export default function rootReducer(state = initialState, action) {
  if (reducers[action.type]) {
    return reducers[action.type](state, action.payload);
  }

  return state;
}
