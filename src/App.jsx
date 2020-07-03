import React, { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import AddressListContainer from './AddressListContainer';

import { loadAddressList, loadCategoryList } from './actions';

import CategoryListContainer from './CategoryListContainer';

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
      <ul>
        <li>양천주가</li>
      </ul>
    </div>
  );
}
