// import categories from './fixtures/cetegories';
// import regions from './fixtures/regions';

import { fetchCategories, fetchRegions, fetchRestaurant } from './services/api';

export function setCategories(categories) {
  return {
    type: 'loadCategories',
    payload: {
      categories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function setRegions(regions) {
  return {
    type: 'loadRegions',
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

export function setRestaurantsList(restaurantsList) {
  return {
    type: 'loadRestaurantsList',
    payload: {
      restaurantsList,
    },
  };
}

export function loadRestaurantsList(checkedRegion, checkedCategoryId) {
  if (checkedRegion === '' || checkedCategoryId === undefined) {
    return {
      type: 'error',
    };
  }
  return async (dispatch) => {
    const restaurantsList = await fetchRestaurant(checkedRegion, checkedCategoryId);
    dispatch(setRestaurantsList(restaurantsList));
  };
}

export function checkCategory(id) {
  return {
    type: 'checkCategory',
    payload: {
      checkedCategoryId: id,
    },
  };
}

export function checkRegion(region) {
  return {
    type: 'checkRegion',
    payload: {
      checkedRegion: region,
    },
  };
}
