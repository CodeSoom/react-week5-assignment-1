import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import AddressList from './AddressList';

import { selectAddress } from './actions';

export default function AddressListContainer() {
  const dispatch = useDispatch();

  const { addressList } = useSelector((state) => ({
    addressList: state.addressList,
  }));

  function handleClick(event) {
    const { target: { textContent } } = event;
    dispatch(selectAddress(textContent));
  }

  return (
    <AddressList
      addressList={addressList}
      onClick={handleClick}
    />
  );
}
