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

export const changeRegion = (region) => ({
  type: 'changeRegion',
  payload: {
    region,
  },
});

export const changeCategory = (category) => ({
  type: 'changeCategory',
  payload: {
    category,
  },
});
