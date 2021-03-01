import { fetchCategories, fetchRegions, fetchRestaurants } from './services/api';

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function addRestaurant() {
  return {
    type: 'addRestaurant',
  };
}

export function changeRestaurantField({ name, value }) {
  return {
    type: 'changeRestaurantField',
    payload: {
      name,
      value,
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

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

export function setSelectedCatId(id) {
  return {
    type: 'setSelectedCatId',
    payload: {
      id,
    },
  };
}

export function setSelectedRegionId(id) {
  return {
    type: 'setSelectedRegionId',
    payload: {
      id,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(setCategories(categories));
  };
}

export function loadRestaurants(selectedCatId, selectedRegionId) {
  return async (dispatch) => {
    if (selectedCatId !== 0 && selectedRegionId !== 0) {
      const restaurants = await fetchRestaurants(selectedCatId, selectedRegionId);
      dispatch(setRestaurants(restaurants));
    } else {
      dispatch(setRestaurants([]));
    }
  };
}
export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}
