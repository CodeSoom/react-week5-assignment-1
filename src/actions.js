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

export function updateRestaurants(restaurants) {
  return {
    type: 'updateRestaurants',
    payload: {
      restaurants,
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

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { checkedRegion: { text }, checkedCategory: { id } } = getState();
    const restaurants = await fetchRestaurants(text, id);
    dispatch(updateRestaurants(restaurants));
  };
}

export function updateCheckedItem(name, value) {
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
