import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import Restaurant from './Restaurant';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { selectedRegion, selectedCategory } = useSelector((state) => ({
    selectedRegion: state.selectedRegion,
    selectedCategory: state.selectedCategory,
  }));

  useEffect(() => {
    if (selectedRegion === '' || selectedCategory === '') {
      return;
    }
    dispatch(loadRestaurant(selectedRegion, selectedCategory));
  }, [selectedRegion, selectedCategory]);

  const { restaurant } = useSelector((state) => ({
    restaurant: state.selectedRestaurant,
  }));
  return (
    <Restaurant restaurants={restaurant} />
  );
}
