import { fetchRegions, fetchCategories, fetchRestaurants } from './services/api';

export function changeSelectedRegion(id) {
  return (
    {
      type: 'changeSelectedRegion',
      payload: { id },
    }
  );
}

export function changeSelectedCategory(id) {
  return (
    {
      type: 'changeSelectedCategory',
      payload: { id },
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

export function loadRestaurants(regionId, categoryId) {
  return async (dispatch, getState) => {
    const { regions } = getState();
    const regionName = regions
      .filter(({ id }) => id === regionId)
      .map(({ name }) => name)
      .join('');

    const restaurants = await fetchRestaurants(regionName, categoryId);
    dispatch(setRestaurants(restaurants));
  };
}
