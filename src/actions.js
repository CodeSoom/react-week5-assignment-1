import { fetchRegions } from './services/api';

export function getRegions(regions) {
  return {
    type: 'getRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const restaurantRegions = await fetchRegions();

    dispatch(getRegions(restaurantRegions));
  };
}
