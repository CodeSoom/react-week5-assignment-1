export function setSelectedRegion(name) {
  return {
    type: 'setSelectedRegion',
    payload: { name },
  };
}

export function setSelectedCategory(name) {
  return {
    type: 'setSelectedCategory',
    payload: { name },
  };
}

export function setCategoreis(categories) {
  return {
    type: 'setCategoreis',
    payload: { categories },
  };
}
