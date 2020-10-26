export function updateRestaurantsLoading(loading) {
  return {
    type: 'updateRestaurantsLoading',
    payload: {
      loading,
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
