export default function reducer(state, action) {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  return state;
}
