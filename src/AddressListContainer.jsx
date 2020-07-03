import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import AddressList from './AddressList';

import { selectAddress, loadRestaurants } from './actions';

export default function AddressListContainer() {
  const dispatch = useDispatch();

  const {
    addressList,
    selectedAddress,
    selectedCategory,
  } = useSelector((state) => ({
    addressList: state.addressList,
    selectedAddress: state.selectedAddress,
    selectedCategory: state.selectedCategory,
  }));

  useEffect(() => {
    if (selectedAddress.name && selectedCategory.id) {
      dispatch(loadRestaurants({
        addressName: selectedAddress.name,
        categoryId: selectedCategory.id,
      }));
    }
  }, [selectedAddress]);

  function handleClick(event) {
    const { target: { id } } = event;
    dispatch(selectAddress(Number(id)));
  }

  return (
    <AddressList
      addressList={addressList}
      onClick={handleClick}
      selectedAddress={selectedAddress}
    />
  );
}
