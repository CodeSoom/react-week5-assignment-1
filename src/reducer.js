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

  if (action.type === 'selectCategory') {
    const { categoryId } = action.payload;

    return {
      ...state,
      categoryId,
    };
  }

  return state;
}

export default reducer;
