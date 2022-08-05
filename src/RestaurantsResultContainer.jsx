import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import RestaurantsResult from './RestaurantsResult';

import {
  loadRestaurants,
} from './actions';

export default function RestaurantsResultContainer() {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants());
  }, []);

  return (
    <RestaurantsResult
      list={restaurants}
    />
  );
}
