import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RegionsContainer() {
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
