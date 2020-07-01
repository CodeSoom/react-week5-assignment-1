const initialState = {
  regions: [],
  selectedRegion: 0,
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

  return state;
}
