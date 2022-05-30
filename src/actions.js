export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export const changeRegionName = (regionName) => ({
  type: 'changeRegionName',
  payload: {
    regionName,
  },
});

export const changeCategoryId = (categoryId) => ({
  type: 'changeCategoryId',
  payload: {
    categoryId,
  },
});
