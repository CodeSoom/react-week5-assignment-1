import { fetchAddressList } from './services/api';

export function setAddressList(addressList) {
  return {
    type: 'setAddressList',
    payload: {
      addressList,
    },
  };
}

export function loadAddressList() {
  return async (dispatch) => {
    const addressList = await fetchAddressList();
    dispatch(setAddressList(addressList));
  };
}
