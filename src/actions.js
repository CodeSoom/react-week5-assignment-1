module.exports = {
  selectRegion: (region) => {
    return {
      type: 'SELECT_REGION',
      payload: {
        region,
      },
    };
  },

  setRegions: (regions) => {
    return {
      type: 'SET_REGIONS',
      payload: {
        regions,
      },
    };
  },
};
