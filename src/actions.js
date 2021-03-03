export function setItems(region, category) {
  return {
    type: 'setItems',
    payload: {
      region,
      category,
    },
  };
}

export function getRestaurant(item) {
  return {
    type: 'getRestaurant',
    payload: {
      item,
    },
  };
}
