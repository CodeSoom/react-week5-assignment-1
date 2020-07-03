import { fetchAddressList, fetchCategoryList } from './services/api';

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

export {
  setAddressList,
  loadAddressList,
  selectAddress,
  selectCategory,
  setCategoryList,
  loadCategoryList,
};
