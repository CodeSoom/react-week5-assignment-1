const initialState = {
  regions: [],
  selectedRegion: null,
  categories: [],
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
  if (action.type === 'selectRegion') {
    const { regionId } = action.payload;
    const { regions } = state;
    return {
      ...state,
      selectedRegion: regions.find((region) => region.id === regionId),
    };
  }

  return state;
}
