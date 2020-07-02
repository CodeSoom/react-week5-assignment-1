export function setRegion(region) {
  const { name } = region;

  return {
    type: 'setRegion',
    payload: {
      regionName: name,
    },
  };
}

export function setCategory(category) {
  const { id } = category;

  return {
    type: 'setCategory',
    payload: {
      categoryId: id,
    },
  };
}
