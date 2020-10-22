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
