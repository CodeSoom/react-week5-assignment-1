const initialState = {
  region: '',
  category: '',
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

const changeRegion = (state, action) => {
  const { region } = action.payload;

  return {
    ...state,
    region,
  };
};

const changeCategory = (state, action) => {
  const { category } = action.payload;

  return {
    ...state,
    category,
  };
};

const actionTypes = {
  setRegions: (state, action) => setRegions(state, action),
  setCategories: (state, action) => setCategories(state, action),
  setRestaurants: (state, action) => setRestaurants(state, action),
  changeRegion: (state, action) => changeRegion(state, action),
  changeCategory: (state, action) => changeCategory(state, action),
};

const reducer = (state = initialState, action) => {
  if (action.type in actionTypes) {
    return actionTypes[action.type](state, action);
  }

  return state;
};

export default reducer;
