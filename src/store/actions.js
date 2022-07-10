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

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

const selectCategory = (selectedCategoryId) => ({
  type: 'selectCategory',
  payload: {
    selectedCategoryId,
  },
});

export {
  setRegions,
  selectRegion,

  setCategories,
  selectCategory,
};
