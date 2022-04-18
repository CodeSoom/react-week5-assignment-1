import { useDispatch, useSelector } from 'react-redux';

import Addresses from './Addresses';

import {
  selectCategory,
} from './actions';

export default function AddressesContainer() {
  const dispatch = useDispatch();

  const { addresses } = useSelector((selector) => ({
    addresses: selector.addresses,
  }));

  // function onSelect(id) {
  //   dispatch(selectCategory({ selectCategoryId: id }));
  // }

  return (
    <Addresses
      addresses={addresses}
    />
  );
}
