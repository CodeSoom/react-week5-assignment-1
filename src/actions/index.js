import {
  fetchRegions,
  fetchCategories,
  fetchRestaurants,
} from '../services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();

    dispatch(setRegions(regions));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selected: { region, categoryId } } = getState();

    if (!region) {
      return;
    }

    // NOTE: id가 0이 있을 수도 있으므로 ''로 지정
    if (categoryId === '') {
      return;
    }

    const restaurants = await fetchRestaurants({ region, categoryId });

    dispatch(setRestaurants(restaurants));
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: { categories },
  };
}

export function loadCategories() {
  return async (dispatch) => {
    const Categories = await fetchCategories();

    dispatch(setCategories(Categories));
  };
}

export function changeSearch({ search, value }) {
  return {
    type: 'changeSearch',
    payload: {
      search,
      value,
    },
  };
}
