const initialState = {
  regions: [],
  categories: [],
  selectCategoryId: null,
};

export default function reducer(state = initialState, action = { type: '' }) {
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

  if (action.type === 'clickCategory') {
    const { id } = action.payload;

    return {
      ...state,
      selectCategoryId: id,
    };
  }

  return state;
}
