import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import AddressList from './AddressList';

import { selectAddress, loadRestaurants } from './actions';

export default function AddressListContainer() {
  const dispatch = useDispatch();

  const {
    addressList,
    categoryList,
    selectedAddress,
    selectedCategory,
  } = useSelector((state) => ({
    addressList: state.addressList,
    categoryList: state.categoryList,
    selectedAddress: state.selectedAddress,
    selectedCategory: state.selectedCategory,
  }));

  useEffect(() => {
    if (selectedAddress && selectedCategory) {
      dispatch(loadRestaurants({
        addressName: selectedAddress,
        categoryId: categoryList.filter((category) => category.name === selectedCategory)[0].id,
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
