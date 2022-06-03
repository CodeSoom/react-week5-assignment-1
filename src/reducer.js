const initialState = {
  selectedRegionName: '',
  selectedCategoryId: '',
  regions: [],
  categories: [],
  restaurants: [],
};

const setRegions = (state, action) => {
  const { regions } = action.payload;

  return {
    ...state,
    regions,
  };
};

const setCategories = (state, action) => {
  const { categories } = action.payload;

  return {
    ...state,
    categories,
  };
};

const setRestaurants = (state, action) => {
  const { restaurants } = action.payload;

  return {
    ...state,
    restaurants,
  };
};

const changeRegionName = (state, action) => {
  const { selectedRegionName } = action.payload;

  return {
    ...state,
    selectedRegionName,
  };
};

const changeCategoryId = (state, action) => {
  const { selectedCategoryId } = action.payload;

  return {
    ...state,
    selectedCategoryId,
  };
};

const actionTypes = {
  setRegions,
  setCategories,
  setRestaurants,
  changeRegionName,
  changeCategoryId,
};

const reducer = (state = initialState, action) => {
  if (action.type in actionTypes) {
    return actionTypes[action.type](state, action);
  }

  return state;
};

export default reducer;
