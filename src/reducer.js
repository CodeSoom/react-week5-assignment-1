const initialState = {
  categories: [],
};

const actions = {
  setCategories: (state, action) => ({
    ...state,
    categories: action.payload.categories,
  }),
};

const defaultAction = (state) => state;

function reducer(state = initialState, action) {
  return (actions[action.type] || defaultAction)(state, action);
}

export default reducer;
