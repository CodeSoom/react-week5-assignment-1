export function setRestaurantRegions(restaurantRegions) {
  return ({
    type: 'setRestaurantRegions',
    payload: {
      restaurantRegions,
    },
  });
}

export function blank() {

}
