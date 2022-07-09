export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function selectRegion(region) {
  return {
    type: 'selectRegion',
    payload: { region },
  };
}

export function selectCategory(category) {
  return {
    type: 'selectCategory',
    payload: { category },
  };
}
