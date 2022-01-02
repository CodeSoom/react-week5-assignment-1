export const initialState = {
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

const actionFunctions = {
  setRegions,
  setCategories,
  setRestaurants,
};

const reducer = (state = initialState, action) => {
  const actionFunction = actionFunctions[action.type] || (() => state);

  return actionFunction(state, action);
};

export default reducer;
