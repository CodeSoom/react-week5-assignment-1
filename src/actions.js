import { fetchCategories, fetchRegions, fetchRestaurants } from './api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function setCurrentRegionId(currentRegionId) {
  return {
    type: 'setCurrentRegionId',
    payload: {
      currentRegionId,
    },
  };
}

export function setCurrentCategoryId(currentCategoryId) {
  return {
    type: 'setCurrentCategoryId',
    payload: {
      currentCategoryId,
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
    const regionName = regions?.find((region) => region.id === currentRegionId)?.name;
    const response = await fetchRestaurants(regionName, currentCategoryId);
    const restaurants = await response.json();
    dispatch(setRestaurants(restaurants));
  };
}
