const initialState = {
  regionNames: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  const { type } = action;

  if (type === 'setRegionNames') {
    const { regionNames } = action.payload;

    return {
      ...state,
      regionNames,
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
