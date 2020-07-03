const initialState = {
  regions: [],
  categories: [],
};

export default function reducer(state = initialState, action = {}) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }
  return state;
}
