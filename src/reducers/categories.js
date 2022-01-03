const initialState = {
  categories: [],
  activeId: -1,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setCategoryActiveId') {
    const { activeId } = action.payload;

    return {
      ...state,
      activeId,
    };
  }

  return state;
}
