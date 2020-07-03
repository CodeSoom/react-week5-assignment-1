import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function setInitRegions(initRegions) {
  return {
    type: 'setInitRegions',
    payload: {
      regions: initRegions,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    try {
      const regions = await fetchRegions();
      dispatch(setInitRegions(regions));
    } catch (err) {
      // TODO : 에러 처리
    }
  };
}

export function selectRegion(selectedRegion) {
  return {
    type: 'selectRegion',
    payload: {
      selectedRegion,
    },
  };
}

export function setInitCategories(initCategories) {
  return {
    type: 'setInitCategories',
    payload: {
      categories: initCategories,
    },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    try {
      const initCategories = await fetchCategories();
      dispatch(setInitCategories(initCategories));
    } catch (error) {
      // TODO : 에러 처리
    }
  };
}

export function selectCategory(selectedCategory) {
  return {
    type: 'selectCategory',
    payload: {
      selectedCategory,
    },
  };
}

export function setRestaurants(initRestaurants) {
  return {
    type: 'setRestaurants',
    payload: {
      restaurants: initRestaurants,
    },
  };
}

export function loadRestaurants(regionName, categoryId) {
  return async (dispatch) => {
    try {
      const initRestaurants = await fetchRestaurants(regionName, categoryId);
      dispatch(setRestaurants(initRestaurants));
    } catch (error) {
      // TODO : 에러 처리
    }
  };
}
