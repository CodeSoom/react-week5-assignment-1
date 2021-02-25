const initialState = {
  currentRegion: '',
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegion') {
    const { currentRegion } = action.payload;

    return {
      ...state,
      currentRegion,
    };
  }

  return state;
}
