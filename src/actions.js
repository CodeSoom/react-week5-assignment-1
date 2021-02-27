import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function changeSelectedRegion(region) {
  return (
    {
      type: 'changeSelectedRegion',
      payload: { region },
    }
  );
}

export function changeSelectedCategory(category) {
  return (
    {
      type: 'changeSelectedCategory',
      payload: { category },
    }
  );
}

export function setRegions(regions) {
  return (
    {
      type: 'setRegions',
      payload: { regions },
    }
  );
}

export function setCategories(categories) {
  return (
    {
      type: 'setCategories',
      payload: { categories },
    }
  );
}

export function setRestaurants(restaurants) {
  return (
    {
      type: 'setRestaurants',
      payload: { restaurants },
    }
  );
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
    const { selectedRegion: { name }, selectedCategory: { id } } = getState();
    const restaurants = await fetchRestaurants(name, id);

    dispatch(setRestaurants(restaurants));
  };
}
