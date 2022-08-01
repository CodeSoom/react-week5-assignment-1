import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from '../store/async-actions';

import Restaurants from '../components/Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, selectedRegion, selectedCategoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedRegion: state.selectedRegion,
    selectedCategoryId: state.selectedCategoryId,
  }));

  useEffect(() => {
    if (selectedRegion === null || selectedCategoryId === null) {
      return;
    }

    dispatch(loadRestaurants());
  }, [selectedRegion, selectedCategoryId]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
