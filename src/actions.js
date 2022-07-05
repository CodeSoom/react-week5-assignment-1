export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

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

export const selectRegion = (region) => ({
  type: 'selectRegion',
  payload: {
    region,
  },
});

export const selectCategory = (category) => ({
  type: 'selectCategory',
  payload: {
    category,
  },
});
