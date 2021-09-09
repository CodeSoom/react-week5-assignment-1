export function setPlaces(places) {
  return {
    type: 'setPlaces',
    payload: {
      places,
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

export function clickPlace(name) {
  return {
    type: 'clickPlace',
    payload: {
      name,
    },
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
