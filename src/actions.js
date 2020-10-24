export function updateFilter({ filter }) {
  return {
    type: 'updateFilter',
    payload: {
      filter,
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
