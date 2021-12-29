const initialState = {
  regions: [],
};

// eslint-disable-next-line no-unused-vars
const reducer = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload,
    };
  }

  return state;
};

export default reducer;
