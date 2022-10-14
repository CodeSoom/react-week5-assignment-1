const initialState = {
  regions: [],
  stores: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state, categories,
    };
  }
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state, regions,
    };
  }
  if (action.type === 'setStores') {
    const { stores } = action.payload;
    return {
      ...state, stores,
    };
  }
  return state;
}
