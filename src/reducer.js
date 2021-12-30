const initialState = {
  categories: [],
  regions: [],
  restaurantsList: [],
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

  return state;
};

export default reducer;
