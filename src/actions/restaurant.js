import { fetchRestaurantRegions } from '../api/restaurant';

export const TYPES = {
  SET_REGIONS: 'SET_REGIONS',
};

export function setRegions(regions) {
  return {
    type: TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantRegions();

    dispatch(setRegions(regions));
  };
}
