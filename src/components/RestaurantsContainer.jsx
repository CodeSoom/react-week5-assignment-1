import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux/actions';
import { get } from '../utils';

import Restaurants from './Restaurants';

export default function RestaurantContainer() {
  const selectedCategoryId = useSelector(get('selectedCategoryId'));
  const selectedRegion = useSelector(get('selectedRegion'));
  const restaurants = useSelector(get('restaurants'));
  const errorMessage = useSelector(get('errorMessage'));

  const dispatch = useDispatch();

  const selectedAllCase = selectedRegion && selectedCategoryId !== null;

  useEffect(() => {
    if (selectedAllCase) {
      dispatch(loadRestaurants());
    }
  }, [selectedCategoryId, selectedRegion]);

  if (!selectedAllCase) return null;

  return (
    <Restaurants restaurants={restaurants} errorMessage={errorMessage.restaurants} />
  );
}
