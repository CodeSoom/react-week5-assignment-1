import { fetchRestaurants } from '../services/api';

/**
 * Action Types
 */
export const SET_RESTAURANTS = Symbol('setRestaurants');

/**
 * Actions
 */
export function setRestaurants(restaurants) {
  return {
    type: SET_RESTAURANTS,
    payload: { restaurants },
  };
}
export function loadRestaurants() {
  return async (dispatch, getState) => {
    try {
      const { selectedCategoryId, selectedRegionId, regions } = getState();
      if (!selectedCategoryId || !selectedRegionId || regions.length === 0) {
        throw Error('invalid params');
      }
      const selectedRegion = regions.find((region) => region.id === selectedRegionId);
      const restaurants = await fetchRestaurants(selectedRegion.name, selectedCategoryId);
      dispatch(setRestaurants(restaurants));
    } catch (e) {
      dispatch(setRestaurants([]));
    }
  };
}
