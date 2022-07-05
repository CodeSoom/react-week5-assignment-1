import { fetchRestaurantRegions } from './services/api';

export function getRegions(regions) {
  return {
    type: 'getRegions',
    payload: {
      regions,
    },
  };
}

export function loadRestaurantRegions() {
  return async (dispatch) => {
    const restaurantRegions = await fetchRestaurantRegions();

    dispatch(getRegions(restaurantRegions));
  };
}
