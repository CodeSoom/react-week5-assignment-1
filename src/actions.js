module.exports = {
  selectRegion: (region) => ({
    type: 'SELECT_REGION',
    payload: {
      region,
    },
  }),

  setRegions: (regions) => ({
    type: 'SET_REGIONS',
    payload: {
      regions,
    },
  }),

  selectCategory: (id) => ({
    type: 'SELECT_CATEGORY',
    payload: {
      id,
    },
  }),

  setCategories: (categories) => ({
    type: 'SET_CATEGORIES',
    payload: {
      categories,
    },
  }),

  setRestaurants: (restaurants) => ({
    type: 'SET_RESTAURANTS',
    payload: {
      restaurants,
    },
  }),
};
