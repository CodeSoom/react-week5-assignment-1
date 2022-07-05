export const initialState = {
  regions: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    return {
      ...state,
      regions: action.payload.regions,
    };
  }

  return state;
};

export default reducer;
