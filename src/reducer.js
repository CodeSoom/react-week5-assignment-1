const initialState = {
  regions: [],
  selectedRegion: null,
  selectedCategoryId: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setSelectedRegion') {
    const { id } = action.payload;

    return {
      ...state,
      selectedRegion: id,
    };
  }

  if (action.type === 'setSelectedCategoryId') {
    const { id } = action.payload;

    return {
      ...state,
      selectedCategoryId: id,
    };
  }

  return state;
}
