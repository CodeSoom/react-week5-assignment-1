import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AddressListContainer from './AddressListContainer';

import { loadAddressList } from './actions';

import CategoryListContainer from './CategoryListContainer';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAddressList());
  }, []);

  return (
    <div>
      <AddressListContainer />
      <CategoryListContainer />
    </div>
  );
}
