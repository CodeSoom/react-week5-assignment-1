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
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegion && selectedCategoryId !== null) {
      dispatch(loadRestaurants(selectedRegion, selectedCategoryId));
    }
  }, [selectedCategoryId, selectedRegion]);

  return (
    <Restaurants restaurants={restaurants} errorMessage={errorMessage} />
  );
}
