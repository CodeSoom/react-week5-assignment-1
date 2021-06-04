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

export function selecteRegion(region) {
  return {
    type: 'selecteRegion',
    payload: { region },
  };
}

export function selecteCategory(category) {
  return {
    type: 'selecteCategory',
    payload: { category },
  };
}
