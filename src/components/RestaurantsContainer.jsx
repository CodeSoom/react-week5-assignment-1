import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux/actions';

import Restaurants from './Restaurants';

export default function RestaurantContainer() {
  const {
    selectedCategoryId, selectedRegion, restaurants, errorMessage,
  } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
    selectedRegion: state.selectedRegion,
    restaurants: state.restaurants,
    errorMessage: state.errorMessage.restaurants,
  }));

  const dispatch = useDispatch();

  const selectedAllCase = selectedRegion && selectedCategoryId !== null;

  useEffect(() => {
    if (selectedAllCase) {
      dispatch(loadRestaurants(selectedRegion, selectedCategoryId));
    }
  }, [selectedCategoryId, selectedRegion]);

  if (!selectedAllCase) return null;

  return (
    <Restaurants restaurants={restaurants} errorMessage={errorMessage} />
  );
}
