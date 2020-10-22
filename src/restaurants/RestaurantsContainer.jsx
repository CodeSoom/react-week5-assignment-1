import React from 'react';

import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';
import Loading from '../Loading';

export default function RestaurantsContainer() {
  const { loading } = useSelector((({ loadingState }) => ({
    loading: loadingState.restaurantsLoading,
  })));

  if (loading) {
    return (
      <Loading />
    );
  }

  return (
    <Restaurants />
  );
}
