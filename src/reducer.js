const initialState = {
  checkedRegion: {},
  checkedCategory: {},
  regions: [],
  categories: [],
  restaurants: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'updateCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'updateRestaurants') {
    return {
      ...state,
      restaurants: action.payload.restaurants,
    };
  }

  if (action.type === 'updateCheckedRegion') {
    return {
      ...state,
      checkedRegion: action.payload.checkedRegion,
    };
  }

  if (action.type === 'updateCheckedCategory') {
    return {
      ...state,
      checkedCategory: action.payload.checkedCategory,
    };
  }

  return state;
}
