export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function selectRegion(regionName) {
  return {
    type: 'selectRegion',
    payload: {
      regionName,
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

export function selectCategory(categoryName) {
  return {
    type: 'selectCategory',
    payload: {
      categoryName,
    },
  };
}
