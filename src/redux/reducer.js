const initialRestaurantSearchQuery = {
  regionName: null,
  categoryId: null,
};

const initialState = {
  regions: [],
  categories: [],
  restaurantSearchQuery: initialRestaurantSearchQuery,
  loading: false,
};

const reducers = {
  setRegions(state, action) {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  },
  setCategories(state, action) {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  updateLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      loading,
    };
  },
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
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
