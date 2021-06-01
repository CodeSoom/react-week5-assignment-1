const initialState = {
  newId: 100,
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action === undefined) {
    return state;
  }

  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }
  return state;
}
