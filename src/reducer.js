const initialState = {
  regionName: '',
  categoryId: 0,
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
  const { regionName } = action.payload;

  return {
    ...state,
    regionName,
  };
};

const changeCategoryId = (state, action) => {
  const { categoryId } = action.payload;

  return {
    ...state,
    categoryId,
  };
};

const actionTypes = {
  setRegions: (state, action) => setRegions(state, action),
  setCategories: (state, action) => setCategories(state, action),
  setRestaurants: (state, action) => setRestaurants(state, action),
  changeRegionName: (state, action) => changeRegionName(state, action),
  changeCategoryId: (state, action) => changeCategoryId(state, action),
};

const reducer = (state = initialState, action) => {
  if (action.type in actionTypes) {
    return actionTypes[action.type](state, action);
  }

  return state;
};

export default reducer;
