const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  region: '',
  categoryId: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRegion') {
    const { region } = action.payload;
    return {
      ...state,
      region,
    };
  }

  if (action.type === 'updateCategoryId') {
    const { categoryId } = action.payload;

    return {
      ...state,
      categoryId,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }
  return state;
}
