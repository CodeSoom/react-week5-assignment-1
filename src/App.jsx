import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './regions/RegionsContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import Loading from './Loading';

import {
  loadInitialState,
} from './redux/actions';

export default function App() {
  const { loading } = useSelector((({ loadingState }) => ({
    loading: loadingState.categoriesLoading && loadingState.regionsLoading,
  })));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadInitialState());
  }, []);

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <>
      <RegionsContainer />
      <CategoriesContainer />
    </>
  );
}
