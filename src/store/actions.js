const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

const selectRegion = (selectedRegion) => ({
  type: 'selectRegion',
  payload: {
    selectedRegion,
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
