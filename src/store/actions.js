import { fetchRegions, fetchCategories, fetchRestaurants } from '../services/api';

const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();

  dispatch(setCategories(categories));
};

const checkCategory = (checkedCategoryId) => ({
  type: 'checkCategory',
  payload: {
    checkedCategoryId,
  },
});

const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();

  dispatch(setRegions(regions));
};

const checkRegion = (checkedRegionId) => ({
  type: 'checkRegion',
  payload: {
    checkedRegionId,
  },
});

const setRestaurants = (restaurants) => ({
  type: 'setRestaurants',
  payload: {
    restaurants,
  },
});

const loadRestaurants = (regions, categories) => async (dispatch) => {
  const regionName = regions.find((region) => region.checked)?.name;
  const categoryId = categories.find((category) => category.checked)?.id;

  if (!regionName || !categoryId) {
    return;
  }

  const restaurants = await fetchRestaurants({ regionName, categoryId });

  dispatch(setRestaurants(restaurants));
};

export {
  setCategories,
  loadCategories,
  checkCategory,

  setRegions,
  loadRegions,
  checkRegion,

  loadRestaurants,
};
