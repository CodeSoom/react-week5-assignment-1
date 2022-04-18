const initialState = {
  selectCategoryId: undefined,
  categories: [],
  selectRegionId: undefined,
  regions: [],
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

  return state;
}
