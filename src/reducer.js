const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  regionName: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRegion') {
    const { regionName } = action.payload;
    return {
      ...state,
      regionName,
    };
  }
  return state;
}
