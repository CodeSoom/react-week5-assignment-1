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

  selectCategory: (id) => {
    return {
      type: 'SELECT_CATEGORY',
      payload: {
        id,
      },
    };
  },

  setCategories: (categories) => {
    return {
      type: 'SET_CATEGORIES',
      payload: {
        categories,
      },
    };
  },
};
