export default {
  setRegions(state, action) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  },
};
