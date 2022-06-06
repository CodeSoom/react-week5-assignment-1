import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from './action';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, categoryId, restaurants } = useSelector((state) => ({
    region: state.region,
    categoryId: state.categoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(loadRestaurants(region, categoryId));
  }, [region, categoryId]);

  return <Restaurants restaurants={restaurants} />;
}
