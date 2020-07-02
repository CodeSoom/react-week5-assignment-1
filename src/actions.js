import { fetchAddressList } from './services/api';

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

export { setAddressList, loadAddressList, selectAddress };
