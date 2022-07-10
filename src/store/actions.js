const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

const selectRegion = (selectedRegionId) => ({
  type: 'selectRegion',
  payload: {
    selectedRegionId,
  },
});

export {
  setRegions,
  selectRegion,
};
