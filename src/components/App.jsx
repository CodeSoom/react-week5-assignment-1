import React, { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import RegionsContainer from './regions/RegionsContainer';
import CategoriesContainer from './categories/CategoriesContainer';
import RestaurantsContainer from './restaurants/RestaurantsContainer';

import Loading from './common/Loading';

import {
  loadInitialState,
} from '../actions';

export default function App() {
  const { loading } = useSelector((({ category, region }) => ({
    loading: category.loading && region.loading,
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
      <RestaurantsContainer />
    </>
  );
}
