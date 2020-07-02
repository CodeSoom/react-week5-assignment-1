import fetchRestaurantData from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function loadRestaurantRegions() {
  return async (dispatch) => {
    const regions = await fetchRestaurantData('regions');
    dispatch(setRegions(regions));
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

export function loadRestaurantCategories() {
  return async (dispatch) => {
    const categories = await fetchRestaurantData('categories');
    dispatch(setCategories(categories));
  };
}
