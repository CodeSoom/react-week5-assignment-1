const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  if (type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  return state;
}
