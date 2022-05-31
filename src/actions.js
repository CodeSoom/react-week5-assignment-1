import {
  fetchCategories,
  fetchRegions,
  fetchRestaurants,
} from './services/api';

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};

export const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

export const loadRestaurants = (regionName, categoryId) => async (dispatch) => {
  const restaurants = await fetchRestaurants(regionName, categoryId);

  dispatch(setRestaurants(restaurants));
};

export const changeRegionName = (regionName) => ({
  type: 'changeRegionName',
  payload: {
    regionName,
  },
});

export const changeCategoryId = (categoryId) => ({
  type: 'changeCategoryId',
  payload: {
    categoryId,
  },
});
