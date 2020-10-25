const initialState = {
  categories: [],
  selectedCategoryId: 0,
};

const category = (state = initialState, action) => {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }
  if (action.type === 'updateSelectedCategoryId') {
    const { categoryId } = action.payload;

    return {
      ...state,
      selectedCategoryId: categoryId,
    };
  }
  return state;
};

export default category;
