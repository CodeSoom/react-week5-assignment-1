export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function changeRestaurantField({ name, value }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      value,
    },
  };
}
