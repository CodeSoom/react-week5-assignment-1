export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRegions(regions) {
  return {
    type: 'regions',
    payload: { regions },
  };
}
