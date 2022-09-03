import { fetchButtonData, fetchFilteringRestaurants } from './services/api';

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

export function setFilteringRestaurants(restaurants) {
  return {
    type: 'setFilteringRestaurants',
    payload: {
      restaurants,
    },
  };
}

export function loadFilteringRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchFilteringRestaurants({ regionName, categoryId });

    dispatch(setFilteringRestaurants(restaurants));
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
