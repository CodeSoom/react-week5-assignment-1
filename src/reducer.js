export default function reducer(state, action) {
  if (action.type === 'setRegion') {
    const { currentRegion } = action.payload;

    return {
      ...state,
      currentRegion,
    };
  }

  return state;
}
