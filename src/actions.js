import { fetchRestaurantInformations, fetchRestaurants } from './services/api';

export function setRestaurantInformations({ sort, data }) {
  return {
    type: 'setRestaurantInformations',
    payload: {
      sort,
      data,
    },
  };
}

export function loadRestaurantInformations(sort) {
  return async (dispatch) => {
    const data = await fetchRestaurantInformations(sort);

    dispatch(setRestaurantInformations({
      sort,
      data,
    }));
  };
}

export function applyFilter({ field, content }) {
  return {
    type: 'applyFilter',
    payload: {
      field,
      content,
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

export function loadRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ regionName, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}
