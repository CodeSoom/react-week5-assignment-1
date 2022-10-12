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

export function setSelectRegion(selectRegionId) {
  return {
    type: 'setSelectRegion',
    payload: {
      selectRegionId,
    },
  };
}

export function setSelectCategory(selectCategoryId) {
  return {
    type: 'setSelectRegion',
    payload: {
      selectCategoryId,
    },
  };
}
