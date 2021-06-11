export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

function updateRestaurantName(name) {
  return {
    type: 'updateRestaurantName',
    payload: {
      name,
    },
  };
}

function updateRestaurantCategory(category) {
  return {
    type: 'updateRestaurantCategory',
    payload: {
      category,
    },
  };
}

function updateRestaurantAddress(address) {
  return {
    type: 'updateRestaurantAddress',
    payload: {
      address,
    },
  };
}

export function updateRestaurantInput(name, value) {
  if (name === 'name') {
    return updateRestaurantName(value);
  }
  if (name === 'category') {
    return updateRestaurantCategory(value);
  }
  if (name === 'address') {
    return updateRestaurantAddress(value);
  }

  return {
    type: 'undefined',
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

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}
