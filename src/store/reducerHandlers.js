export default {
  setRegions(state, action) {
    return {
      ...state,
      regions: action.payload.regions,
    };
  },

  selectRegion(state, action) {
    return {
      ...state,
      selectedRegionId: action.payload.selectedRegionId,
    };
  },

  setCategories(state, action) {
    return {
      ...state,
      categories: action.payload.categories,
    };
  },

  selectCategory(state, action) {
    return {
      ...state,
      selectedCategoryId: action.payload.selectedCategoryId,
    };
  },
};
