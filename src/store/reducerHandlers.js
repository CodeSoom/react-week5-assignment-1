export default {
  setRegions(state, action) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  },

  selectRegion(state, action) {
    return {
      ...state,
      selectedRegionId: action.payload.selectedRegionId,
    };
  },
};
