const initialState = {
  categories: [],
  regions: [],
  category: null,
  region: null,
};

const reducers = {
  loadRestaurantInfo: (state, { type, info }) => ({
    ...state,
    [type]: info,
  }),
  updateRestaurant: (state, { type, id }) => ({
    ...state,
    [type]: id,
  }),
};

const reducer = (state = initialState, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
};

export default reducer;
