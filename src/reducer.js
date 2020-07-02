const inistialState = {
  regions: [],
  region: '',
  categories: [],
  category: '',
  restaurants: [],
};

export default function reducer(state = inistialState, action) {
  if (action.type === 'changeRegion') {
    return {
      ...state,
      region: action.payload.name,
    };
  }

  if (action.type === 'changeCategory') {
    return {
      ...state,
      category: action.payload.name,
    };
  }

  if (action.type === 'setCategories') {
    return {
      ...state,
      categories: action.payload,
    };
  }

  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload,
    };
  }

  if (action.type === 'setRestaurants') {
    return {
      ...state,
      restaurants: action.payload,
    };
  }

  return state;
}
