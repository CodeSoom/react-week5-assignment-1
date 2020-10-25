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

  if (action.type === 'updateSelectedRegionName') {
    const { regionName } = action.payload;

    return {
      ...state,
      selectedRegionName: regionName,
    };
  }
  return state;
};

export default region;
