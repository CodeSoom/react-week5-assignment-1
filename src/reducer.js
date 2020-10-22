const initialState = {
  restaurants: [],
  regions: [],
  categories: [],
  region: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'updateRegion') {
    const { region } = action.payload;
    return {
      ...state,
      region,
    };
  }
  return state;
}
