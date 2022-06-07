import { fetchCategories, fetchRegions, fetchRestaurants } from './api';
import { setRegions, setCategories, setRestaurants } from './actions';
import { findRegion } from './helper';

export function loadRegions() {
  return async (dispatch) => {
    const response = await fetchRegions();
    const regions = await response.json();
    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const response = await fetchCategories();
    const categories = await response.json();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { regions, currentRegionId, currentCategoryId } = getState();
    // TODO: 아예 지역이름을 가져오는 대대적 수정이 필요..
    const regionName = findRegion(regions, currentRegionId).name;
    const response = await fetchRestaurants(regionName, currentCategoryId);
    const restaurants = await response.json();
    dispatch(setRestaurants(restaurants));
  };
}
