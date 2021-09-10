import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export function updateRegions(regions) {
  return {
    type: 'updateRegions',
    payload: {
      regions,
    },
  };
}

export function updateCategories(categories) {
  return {
    type: 'updateCategories',
    payload: {
      categories,
    },
  };
}

export function updateRestaurants(data) {
  return {
    type: 'updateRestaurants',
    payload: {
      restaurants: data,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(updateRegions(regions));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchCategories();
    dispatch(updateCategories(categories));
  };
}

export function loadRestaurants(text, id) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants(text, id);
    dispatch(updateRestaurants(restaurants));
  };
}

export function updateCheckedElement(name, value) {
  if (name === 'region') {
    return {
      type: 'updateCheckedRegion',
      payload: {
        checkedRegion: value,
      },
    };
  }
  return {
    type: 'updateCheckedCategory',
    payload: {
      checkedCategory: value,
    },
  };
}
