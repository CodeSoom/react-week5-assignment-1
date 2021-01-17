import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from './services/api';

export function updateRegion(region) {
  return {
    type: 'updateRegion',
    payload: {
      region,
    },
  };
}

export function updateCategoryId(categoryId) {
  return {
    type: 'updateCategoryId',
    payload: {
      categoryId,
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

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();

    dispatch(setCategories(categories));
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectRegion, selectCategoryId } = getState();

    if (!selectRegion || !selectCategoryId) {
      return;
    }

    const restaurants = await fetchRestaurants(selectRegion, selectCategoryId);

    dispatch(setRestaurants(restaurants));
  };
}
