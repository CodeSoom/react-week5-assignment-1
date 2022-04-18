export function setLocations(locations) {
  return {
    type: 'setLocations',
    payload: {
      locations,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function selectLocation({ id }) {
  return {
    type: 'selectLocation',
    payload: {
      id,
    },
  };
}

export function selectCategory({ id }) {
  return {
    type: 'selectCategory',
    payload: {
      id,
    },
  };
}
