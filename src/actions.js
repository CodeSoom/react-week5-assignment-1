export function getRegions(regions) {
  return {
    type: 'getRegions',
    payload: {
      regions,
    },
  };
}

export function getCategories(categories) {
  return {
    type: 'getCategories',
    payload: {
      categories,
    },
  };
}

export function getRestaurants(restaurants) {
  return {
    type: 'getRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function setStartLoading(target) {
  return {
    type: 'setStartLoading',
    payload: {
      target,
    },
  };
}

export function setRegion(region) {
  return {
    type: 'setRegion',
    payload: {
      region,
    },
  };
}

export function setCategoryId(categoryId) {
  return {
    type: 'setCategoryId',
    payload: {
      categoryId,
    },
  };
}
