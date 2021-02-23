export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function clickCategory(id) {
  return {
    type: 'clickCategory',
    payload: {
      id,
    },
  };
}
