const initialState = {
  selectedCategoryID: null,
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  return state;
}
