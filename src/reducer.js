const initialState = {
  regions: [],
  selectedRegion: null,
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
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
