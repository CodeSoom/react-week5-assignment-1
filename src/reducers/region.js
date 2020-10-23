const initialState = {
  regions: [],
  selectedIdx: -1,
};

const region = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;
    return {
      ...state,
      regions,
    };
  }
  return state;
};

export default region;
