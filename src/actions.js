import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(regionName, categoryId);

    dispatch(setRestaurants(restaurants));
  };
}

export const changeRegionName = (regionName) => ({
  type: 'changeRegionName',
  payload: {
    regionName,
  },
});

export const changeCategoryId = (categoryId) => ({
  type: 'changeCategoryId',
  payload: {
    categoryId,
  },
});
