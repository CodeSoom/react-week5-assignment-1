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

  const restaurants = [
    {
      id: 1,
      categoryId: 1,
      name: '양천주가',
      address: '서울 강남구',
    },
  ];

  return (
    <div>
      <AddressListContainer />
      <CategoryListContainer />
      <Restaurants restaurants={restaurants} />
    </div>
  );
}
