const initialState = {
  categories: [],
  regions: [],
  restaurantsList: [],
  checkedCategoryId: undefined,
  checkedRegion: '',
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
      checkedCategoryId: Number(action.payload.checkedCategoryId),
    };
  }

  if (action.type === 'checkRegion') {
    return {
      ...state,
      checkedRegion: action.payload.checkedRegion,
    };
  }

  if (action.type === 'loadRestaurantsList') {
    return {
      ...state,
      restaurantsList: action.payload.restaurantsList,
    };
  }

  return state;
};

export default reducer;
