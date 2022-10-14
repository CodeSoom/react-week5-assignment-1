const initialState = {
  regions: [],
  stores: [],
  categories: [],
  selectedIdx: 0,
  selectedRegion: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setIdx') {
    const { selectedIdx } = action.payload;
    return {
      ...state, selectedIdx,
    };
  }
  if (action.type === 'setRegion') {
    const { selectedRegion } = action.payload;
    return {
      ...state, selectedRegion,
    };
  }
  if (action.type === 'setCategories') {
    const { categories } = action.payload;
    return {
      ...state, categories,
    };
  }
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state, regions,
    };
  }
  if (action.type === 'setStores') {
    const { stores } = action.payload;
    return {
      ...state, stores,
    };
  }
  return state;
}
