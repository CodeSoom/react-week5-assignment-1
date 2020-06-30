const initialState = {
  categories: [],
};

function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  return state;
}

export default reducer;
