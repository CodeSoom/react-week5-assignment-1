import { fetchRegions } from '../services/api';

/**
 * Action Types
 */
export const SET_REGIONS = Symbol('setRegions');
export const SET_SELECTED_REGIONS_ID = Symbol('setSelectedRegionId');

/**
 * Actions
 */
export function setSelectedRegionId(selectedRegionId) {
  return {
    type: SET_SELECTED_REGIONS_ID,
    payload: { selectedRegionId },
  };
}
export function setRegions(regions) {
  return {
    type: SET_REGIONS,
    payload: { regions },
  };
}
export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}
