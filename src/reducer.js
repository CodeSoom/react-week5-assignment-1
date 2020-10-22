const initialState = {
  categories: [],
  regions: [],
  categoryId: 0,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'checkedCategory') {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
    };
  }

  return state;
}
