const initialState = {
  restaurants: [],
  loading: false,
};

const reducers = {
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
