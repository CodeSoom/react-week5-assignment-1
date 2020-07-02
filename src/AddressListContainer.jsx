import React from 'react';

import AddressList from './AddressList';

export default function AddressListContainer() {
  const addressList = [
    { id: 1, name: '서울' },
  ];

  return (
    <AddressList addressList={addressList} />
  );
}
