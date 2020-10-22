const initialState = {
  regionName: null,
  categoryId: null,
};

const reducers = {
  selectRegion(state, action) {
    const { regionName } = action.payload;

    return {
      ...state,
      restaurantSearchQuery: {
        ...state.restaurantSearchQuery,
        regionName,
      },
    };
  },
  selectCategory(state, action) {
    const { categoryId } = action.payload;

    return {
      ...state,
      restaurantSearchQuery: {
        ...state.restaurantSearchQuery,
        categoryId,
      },
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
