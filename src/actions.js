import { fetchAddressList, fetchCategoryList, fetchRestaurants } from './services/api';

function setAddressList(addressList) {
  return {
    type: 'setAddressList',
    payload: {
      addressList,
    },
  };
}

function loadAddressList() {
  return async (dispatch) => {
    const addressList = await fetchAddressList();
    dispatch(setAddressList(addressList));
  };
}

function selectAddress(selectedAddressId) {
  return {
    type: 'selectAddress',
    payload: { selectedAddressId },
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

function loadRestaurants({ addressName, categoryId }) {
  return async (dispatch) => {
    const restaurants = await fetchRestaurants({ addressName, categoryId });
    dispatch(setRestaurants(restaurants));
  };
}

export {
  setAddressList,
  loadAddressList,
  selectAddress,
  selectCategory,
  setCategoryList,
  loadCategoryList,
  setRestaurants,
  loadRestaurants,
};
