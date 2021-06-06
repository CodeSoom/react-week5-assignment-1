import { fetchRestaurantRegions } from "../services/api";

export function checkRegion(id) {
  return {
    type: 'checkRegion',
    payload: {
      id,
    },
  };
}

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      id,
    },
  };
}

export function setRestaurantRegions(regions) {
  return {
    type: 'setRestaurantRegions',
    payload: {
      regions,
    },
  };
}

export function loadRestaurantRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantRegions();
    dispatch(setRestaurantRegions(regions));
  };
}