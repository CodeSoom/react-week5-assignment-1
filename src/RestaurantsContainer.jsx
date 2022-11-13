import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import Restaurants from './Restaurants';

import { loadRestaurants } from './actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, selectedRegion, selectedCategoryId } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    selectedCategoryId: state.selectedCategoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    if (selectedRegion === '' || selectedCategoryId === '') {
      return;
    }

    dispatch(loadRestaurants(selectedRegion, selectedCategoryId));
  }, [selectedRegion, selectedCategoryId]);

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
