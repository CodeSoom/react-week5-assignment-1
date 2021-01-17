import {
  fetchOptions, fetchRestaurants,
} from './services/api';

export function setOptions({ optionName, values }) {
  return {
    type: 'setOptions',
    payload: {
      optionName,
      values,
    },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchOptions({ optionName: 'regions' });
    dispatch(setOptions({ optionName: 'regions', values: regions }));
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const categories = await fetchOptions({ optionName: 'categories' });
    dispatch(setOptions({ optionName: 'categories', values: categories }));
  };
}

export function selectOption(option, id) {
  return {
    type: 'selectOption',
    payload: {
      option,
      id,
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

export function loadRestaurants({ region, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ region, categoryId });
    dispatch(setRestaurants(restaurants));
  };
}
