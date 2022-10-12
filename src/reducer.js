const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
  selectRegionId: undefined,
  selectCagegoryId: undefined,
};

export default function reducer(state = initialState, action) {
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

  if (action.type === 'setSelectRegion') {
    const { selectRegionId } = action.payload;

    return {
      ...state,
      selectRegionId,
    };
  }

  if (action.type === 'setSelectCategory') {
    const { selectCategoryId } = action.payload;

    return {
      ...state,
      selectCategoryId,
    };
  }

  return state;
}
