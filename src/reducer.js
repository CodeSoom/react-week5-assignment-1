const initialState = {
  categories: [],
  regions: [],
  restaurantsList: [],
  checkedCategory: undefined,
  checkedRegion: undefined,
};

const reducer = (state = initialState, action) => {
  if (action.type === 'loadCategories') {
    return {
      ...state,
      categories: action.payload.categories,
    };
  }

  if (action.type === 'loadRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  if (action.type === 'checkCategory') {
    return {
      ...state,
      checkedCategory: Number(action.payload.checkedCategory),
    };
  }

  if (action.type === 'checkRegion') {
    return {
      ...state,
      checkedRegion: Number(action.payload.checkedRegion),
    };
  }

  return state;
};

export default reducer;
