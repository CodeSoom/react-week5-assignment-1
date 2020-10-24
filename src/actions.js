export function updateFilter({ filter }) {
  return {
    type: 'updateFilter',
    payload: {
      filter,
    },
  };
}

export function setRegions({ regions }) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories({ categories }) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants({ restaurants }) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}
