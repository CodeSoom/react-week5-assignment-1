const initialState = {
  categories: [],
  regions: [],
  restaurants: [],
  category: null,
  region: null,
};

const reducers = {
  setRestaurants: (state, { type, info }) => ({
    ...state,
    [type]: info,
  }),
  updateRestaurant: (state, { type, id }) => ({
    ...state,
    [type]: id,
  }),
  loadRestaurantsName: (state, restaurants) => ({
    ...state,
    restaurants,
  }),
};

const reducer = (state = initialState, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
};

export default reducer;
