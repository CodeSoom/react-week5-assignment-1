const initialState = {
  categories: [],
  regions: [],
  categoryId: 0,
  regionName: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'checkedCategory') {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
    };
  }

  if (action.type === 'checkedRegion') {
    const { name } = action.payload;
    return {
      ...state,
      regionName: name,
    };
  }

  return state;
}
