const initialState = {
  categorys: [],
  regions: [],
};

const reducers = {
  loadRestaurantInfo: (state, { type, info }) => ({
    ...state,
    [type]: info,
  }),
};

const reducer = (state = initialState, { type, payload }) => {
  if (!reducers[type]) {
    return state;
  }

  return reducers[type](state, payload);
};

export default reducer;
