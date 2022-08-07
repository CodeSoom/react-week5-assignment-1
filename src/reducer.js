const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  currentContent: {
    region: '',
    category: 0,
  },
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

  if (action.type === 'setCurrentRegion') {
    const { region } = action.payload.currentContent;

    return {
      ...state,
      currentContent: {
        region,
      },
    };
  }

  return state;
}
