export function chooseRegion(regionName) {
  return {
    type: 'chooseRegion',
    payload: {
      regionName,
    },
  };
}

export function chooseCategory(categoryId) {
  return {
    type: 'chooseCategory',
    payload: {
      categoryId,
    },
  };
}
