const initialState = {
  restaurantsLoading: false,
  regionsLoading: false,
  categoriesLoading: false,
};

const reducers = {
  updateRestaurantsLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      restaurantsLoading: loading,
    };
  },
  updateCategoriesLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      categoriesLoading: loading,
    };
  },
  updateRegionsLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      regionsLoading: loading,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
