const initialState = {
  regions: [],
  categories: [],
  region: '',
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

  if (action.type === 'setRegion') {
    return {
      ...state,
      region: action.payload.region,
    };
  }
  return state;
}
