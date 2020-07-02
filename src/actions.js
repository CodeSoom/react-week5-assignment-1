export function loadAddressList() {
  return {
    type: 'loadAddressList',
    payload: { addressList: [{ id: 1, name: 2 }] },
  };
}

export function setAddressList(addressList) {
  return {
    type: 'setAddressList',
    payload: { addressList },
  };
}
