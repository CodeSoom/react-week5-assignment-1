import React from 'react';

import { useSelector } from 'react-redux';

import AddressList from './AddressList';

export default function AddressListContainer() {
  const { addressList } = useSelector((state) => ({
    addressList: state.addressList,
  }));

  return (
    <AddressList addressList={addressList} />
  );
}
