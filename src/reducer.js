const initialState = {
  regions: [],
};

// eslint-disable-next-line no-unused-vars
const reducer = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  return state;
};

export default reducer;
