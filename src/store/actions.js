const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

const selectRegion = (regionId) => ({
  type: 'selectRegion',
  payload: {
    regionId,
  },
});

export {
  setRegions,
  selectRegion,
};
