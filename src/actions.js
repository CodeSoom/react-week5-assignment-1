export function setRegion(currentRegion) {
  return {
    type: 'setRegion',
    payload: {
      currentRegion,
    },
  };
}

export function setCategory(currentCategory) {
  return {
    type: 'setCategory',
    payload: {
      currentCategory,
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

export function loadRestaurants() {
  return async (dispatch) => {
    dispatch(setRestaurants());
  };
}
