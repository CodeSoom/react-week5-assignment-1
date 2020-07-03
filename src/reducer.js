const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }
  return state;
}
