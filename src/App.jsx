import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AddressListContainer from './AddressListContainer';

import CategoryListContainer from './CategoryListContainer';

import Restaurants from './Restaurants';

import { loadAddressList, loadCategoryList } from './actions';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadAddressList());
    dispatch(loadCategoryList());
  }, []);

  return (
    <div>
      <AddressListContainer />
      <CategoryListContainer />
      <Restaurants />
    </div>
  );
}
