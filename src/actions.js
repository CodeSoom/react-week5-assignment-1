import { fetchRegions, fetchCategories, fetchSelected } from './services/api';

export const setRegions = (regions) => ({
  type: 'setRegions',
  payload: {
    regions,
  },
});

export const setCategories = (categories) => ({
  type: 'setCategories',
  payload: {
    categories,
  },
});

export const selectedRegion = (regionName) => ({
  type: 'selectedRegion',
  payload: {
    selectedRegionName: regionName,
  },
});

export const selectedCategory = (categoryId) => ({
  type: 'selectedCategory',
  payload: {
    selectedCategoryId: categoryId,
  },
});

export const selectedRestaurant = (restaurant) => ({
  type: 'selectedRestaurant',
  payload: {
    selectedRestaurant: restaurant,
  },
});

export const loadRegions = () => async (dispatch) => {
  const regions = await fetchRegions();
  dispatch(setRegions(regions));
};

export const loadCategories = () => async (dispatch) => {
  const categories = await fetchCategories();
  dispatch(setCategories(categories));
};

export const loadRestaurant = (regionName, categoryId) => async (dispatch) => {
  const selecteRestaurant = await fetchSelected(regionName, categoryId);
  dispatch(selectedRestaurant(selecteRestaurant));
};
