export function setRegion(regionName) {
  return {
    type: 'setRegion',
    payload: {
      regionName,
    },
  };
}

export function setCategory(categoryId) {
  return {
    type: 'setCategory',
    payload: {
      categoryId,
    },
  };
}
