import { fetchRegions, fetchCategoryList, fetchRestaurants } from './services/api';

function setRegions(regions) {
  return {
    type: 'setRegions',
    payload: {
      regions,
    },
  };
}

function loadRegions() {
  return async (dispatch) => {
    const regions = await fetchRegions();
    dispatch(setRegions(regions));
  };
}

function selectRegion(selectedRegionId) {
  return {
    type: 'selectRegion',
    payload: { selectedRegionId },
  };
}

function selectCategory(selectedCategoryId) {
  return {
    type: 'selectCategory',
    payload: { selectedCategoryId },
  };
}

function setCategoryList(categoryList) {
  return {
    type: 'setCategoryList',
    payload: { categoryList },
  };
}

function loadCategoryList() {
  return async (dispatch) => {
    const categoryList = await fetchCategoryList();
    dispatch(setCategoryList(categoryList));
  };
}

function setRestaurants(restaurants) {
  return {
    type: 'setRestaurants',
    payload: { restaurants },
  };
}

function loadRestaurants({ regionName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ regionName, categoryId });
    dispatch(setRestaurants(restaurants));
  };
}

export {
  setRegions,
  loadRegions,
  selectRegion,
  selectCategory,
  setCategoryList,
  loadCategoryList,
  setRestaurants,
  loadRestaurants,
};
