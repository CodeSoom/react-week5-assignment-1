const initialState = {
  regionList: [],
  regionId: '',
  categories: [],
  categoryId: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegionList') {
    const { regionList } = action.payload;
    return {
      ...state,
      regionList,
    };
  }

  if (action.type === 'selectRegion') {
    const { id } = action.payload;
    return {
      ...state,
      regionId: id,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'selectCategory') {
    const { id } = action.payload;
    return {
      ...state,
      categoryId: id,
    };
  }

  return state;
}
