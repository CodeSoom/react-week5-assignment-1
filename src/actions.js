import { fetchButtonData, fetchFilteredRestaurants } from './services/api';

export function setButtonData({ sort, data }) {
  return {
    type: 'setButtonData',
    payload: {
      sort,
      data,
    },
  };
}

export function loadButtonData(sort) {
  return async (dispatch) => {
    const data = await fetchButtonData(sort);

    dispatch(setButtonData({
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

export function setFilteredRestaurants(restaurants) {
  return {
    type: 'setFilteredRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadFilteredRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchFilteredRestaurants({ regionName, categoryId });

    dispatch(setFilteredRestaurants(restaurants));
  };
}
