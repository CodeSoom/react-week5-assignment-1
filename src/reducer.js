const initialState = {
  selected: {
    region: '',
    categoryId: '',
  },
  categories: [],
  regions: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  const { selected } = state;

  if (action.type === 'updateSelected') {
    return {
      ...state,
      selected: {
        ...selected,
        ...action.payload,
      },
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

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  return state;
}
