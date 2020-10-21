import {
  fetchRegions,
  fetchCategories,
} from './services/api';

export function setRegions(regions) {
  return ({
    type: 'setRegions',
    payload: {
      regions,
    },
  });
}

export function setCategories(categories) {
  return ({
    type: 'setCategories',
    payload: {
      categories,
    },
  });
}

export function setRestaurants(restaurants) {
  return ({
    type: 'setRestaurants',
    payload: {
      restaurants,
    },
  });
}

export function selectCategory(id) {
  return ({
    type: 'selectCategory',
    payload: {
      id,
    },
  });
}

export function selectRegion(selectedRegion) {
  const { id, name } = selectedRegion;

  return ({
    type: 'selectRegion',
    payload: {
      id,
      name,
    },
  });
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
  return (dispatch) => {
    const restaurants = [
      { id: 1, name: '양천주가' },
      { id: 6, name: '한국식 초밥' },
      { id: 14, name: '김초밥' },
    ];
    dispatch(setRestaurants(restaurants));
  };
}
