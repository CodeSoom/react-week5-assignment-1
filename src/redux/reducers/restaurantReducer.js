const initialState = {
  restaurants: [],
  loading: false,
};

const reducers = {
  setRestaurants(state, action) {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  },
  updateRestaurantsLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      loading,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
