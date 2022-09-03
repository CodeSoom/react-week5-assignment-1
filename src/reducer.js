const initialState = {
  regions: [],
};

export default function reducer(state = initialState, action) {
  if (action.type === 'setRegion') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }
}
