export function setRegion(currentRegion) {
  return {
    type: 'setRegion',
    payload: {
      currentRegion,
    },
  };
}

export function setCategory(currentCategory) {
  return {
    type: 'setCategory',
    payload: {
      currentCategory,
    },
  };
}
