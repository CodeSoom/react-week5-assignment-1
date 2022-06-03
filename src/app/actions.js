export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setCurrentRegionId(currentRegionId) {
  return {
    type: 'setCurrentRegionId',
    payload: {
      currentRegionId,
    },
  };
}

export function setCurrentCategoryId(currentCategoryId) {
  return {
    type: 'setCurrentCategoryId',
    payload: {
      currentCategoryId,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}
