import ApiService from '../services/api/ApiService';

const apiService = new ApiService('https://eatgo-customer-api.ahastudio.com', console);

export const ACTION_TYPES = {
  SET_REGIONS: 'SET_REGIONS',
  SET_CATEGORIES: 'SET_CATEGORIES',
  SET_FILTER: 'SET_FILTER',
  SET_RESTAURANTS: 'SET_RESTAURANTS',
};

const DEFAULT_OPTION_INDEX = 0;

export function setFilter({ region, category }) {
  return {
    type: ACTION_TYPES.SET_FILTER,
    payload: { filter: { region, category } },
  };
}

export function setRegions(regions) {
  return {
    type: ACTION_TYPES.SET_REGIONS,
    payload: { regions },
  };
}

export function fetchRegions() {
  return async (dispatch, getState) => {
    const regions = await apiService.fetchRegions();
    dispatch(setRegions(regions));

    const { filter } = getState();
    dispatch(
      setFilter({ ...filter, region: regions[DEFAULT_OPTION_INDEX].id }),
    );
  };
}

export function setCategories(categories) {
  return {
    type: ACTION_TYPES.SET_CATEGORIES,
    payload: { categories },
  };
}

export function fetchCategories() {
  return async (dispatch, getState) => {
    const categories = await apiService.fetchCategories();
    dispatch(setCategories(categories));

    const { filter } = getState();
    dispatch(setFilter({ ...filter, category: categories[DEFAULT_OPTION_INDEX].id }));
  };
}

export function setRestaurants(restaurants) {
  return {
    type: ACTION_TYPES.SET_RESTAURANTS,
    payload: { restaurants },
  };
}

export function fetchRestaurants() {
  return async (dispatch, getState) => {
    const { filter } = getState();
    const restaurants = await apiService.fetchRestaurants(filter.region, filter.category);
    dispatch(setRestaurants(restaurants));
  };
}
