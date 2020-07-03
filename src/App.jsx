import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AddressListContainer from './AddressListContainer';
import CategoryList from './CategoryList';

import { loadAddressList } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAddressList());
  }, []);

  return (
    <div>
      <AddressListContainer />
      <CategoryList />
    </div>
  );
}
