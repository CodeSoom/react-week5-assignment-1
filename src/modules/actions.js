export function setPlaces(places) {
  return {
    type: 'setPlaces',
    payload: {
      places,
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
