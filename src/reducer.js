const initialState = {
  regionList: [],
  regionId: '',
  categories: [],
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

  return state;
}
