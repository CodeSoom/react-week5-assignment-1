const initialState = {
  selectCategoryId: undefined,
  categories: [],
  selectRegionId: undefined,
  regions: [],
  restaurants: [],
  loading: false,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'selectCategory') {
    const { selectCategoryId } = action.payload;

    return {
      ...state,
      selectCategoryId,
    };
  }

  if (action.type === 'selectRegion') {
    const { selectRegionId } = action.payload;

    return {
      ...state,
      selectRegionId,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setLoading') {
    return {
      ...state,
      loading: true,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
      loading: false,
    };
  }

  return state;
}
