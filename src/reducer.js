const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }
  if (action.type === 'setRegions') {
    console.log(action);
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  return state;
}
