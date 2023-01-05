const initialState = {
  regions: [],
  categories: [],
  restaurants: [],
};

const reducer = (state = initialState, action) => {
  if (action.type === 'setRegions') {
    const { regions } = action.payload;

    return {
      ...state,
      regions,
    };
  }

  if (action.type === 'setCategories') {
    const { categories } = action.payload;

    return {
      ...state,
      categories,
    };
  }

  if (action.type === 'checkCategory') {
    const { categories } = state;
    const { checkedCategoryId } = action.payload;

    const newCategories = categories.map((category) => {
      const newCategory = {
        ...category,
        checked: false,
      };

      if (category.id === checkedCategoryId) {
        newCategory.checked = true;
      }

      return newCategory;
    });

    return {
      ...state,
      categories: newCategories,
    };
  }

  if (action.type === 'checkRegion') {
    const { regions } = state;
    const { checkedRegionId } = action.payload;

    const newRegions = regions.map((region) => {
      const newRegion = {
        ...region,
        checked: false,
      };

      if (region.id === checkedRegionId) {
        newRegion.checked = true;
      }

      return newRegion;
    });

    return {
      ...state,
      regions: newRegions,
    };
  }

  if (action.type === 'setRestaurants') {
    const { restaurants } = action.payload;

    return {
      ...state,
      restaurants,
    };
  }

  return state;
};

export default reducer;
