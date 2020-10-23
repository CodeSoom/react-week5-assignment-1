const initialState = {
  regions: [],
  selectedRegionName: '',
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
