const initialState = {
  regions: [],
  categories: [],
  search: {
    region: '',
    category: '',
  },
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

  if (type === 'changeSearch') {
    const { search, value } = action.payload;

    return {
      ...state,
      search: {
        ...state.search,
        [search]: value,
      },
    };
  }

  return state;
}
