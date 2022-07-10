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

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export {
  setRegions,
  selectRegion,

  setCategories,
  selectCategory,

  setRestaurants,
};
