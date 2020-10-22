const initialState = {
  categories: [],
  selectedId: null,
  loading: false,
};

const reducers = {
  setCategories(state, action) {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  },
  updateCategoriesLoading(state, action) {
    const { loading } = action.payload;

    return {
      ...state,
      loading,
    };
  },
  selectCategory(state, action) {
    const { categoryId } = action.payload;

    return {
      ...state,
      selectedId: categoryId,
    };
  },
  default(state) {
    return state;
  },
};

export default function reducer(state = initialState, action = {}) {
  return (reducers[action.type] || reducers.default)(state, action);
}
