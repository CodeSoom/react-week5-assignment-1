import { useDispatch, useSelector } from 'react-redux';

import Addresses from './Addresses';

import {
  selectAddress,
} from './actions';

export default function AddressesContainer() {
  const dispatch = useDispatch();

  const { addresses, selectAddressId } = useSelector((selector) => ({
    addresses: selector.addresses,
    selectAddressId: selector.selectAddressId,
  }));

  function onSelect(id) {
    dispatch(selectAddress({ selectAddressId: id }));
  }

  return (
    <Addresses
      addresses={addresses}
      onSelect={onSelect}
      selectAddressId={selectAddressId}
    />
  );
}
