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
  return state;
}
