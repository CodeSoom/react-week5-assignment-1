const initialState = {
  regions: [],
  selectedRegion: '',
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;

  if (type === 'SELECT_REGION') {
    const { region } = payload;
    return {
      ...state,
      selectedRegion: region,
    };
  }

  if (type === 'SET_REGIONS') {
    const { regions } = payload;
    return {
      ...state,
      regions,
    };
  }
  return state;
}
