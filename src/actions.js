import { fetchRegions, fetchCategoies, fetchRestaurants } from './services/api';

export function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: { regions },
  };
}

export function setCategories(categories) {
  return {
    type: 'setCategories',
    payload: {
      categories,
    },
  };
}

export function loadInitialData() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    const categories = await fetchCategoies();
    dispatch(setRegions(regions));
    dispatch(setCategories(categories));
  };
}

export function selectedRegion(regionId) {
  return ({
    type: 'selectedRegion',
    payload: { regionId },
  });
}

export function selectedCategory(categoryId) {
  return ({
    type: 'selectedCategory',
    payload: { categoryId },
  });
}

export function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

export function loadRestaurants() {
  return async (dispatch, getState) => {
    const { selectRegion: region, selectCategory: category } = getState();

    if (!region || !category) {
      return;
    }
    const restaurants = await fetchRestaurants({ regionName: region.name, categoryId: category.id });
    console.log(restaurants);
    dispatch(setRestaurants(restaurants));
  };
}
