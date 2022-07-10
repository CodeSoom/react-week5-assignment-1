import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from '../store/async-actions';

import Restaurants from '../components/Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, selectedRegionId, selectedCategoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    selectedRegionId: state.selectedRegionId,
    selectedCategoryId: state.selectedCategoryId,
  }));

  useEffect(() => {
    if (selectedRegionId === null || selectedCategoryId === null) {
      return;
    }

    dispatch(loadRestaurants());
  }, [selectedRegionId, selectedCategoryId]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
