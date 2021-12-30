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

export function putRestaurantField({ name, value }) {
  return {
    type: 'putRestaurantField',
    payload: {
      name, value,
    },
  };
}
