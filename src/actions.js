export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: {
      region,
    },
  };
}

export function updateCategoryId(categoryId) {
  return {
    type: 'updateCategoryId',
    payload: {
      categoryId,
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

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}
