import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurant } from './actions';

import Restaurant from './Restaurant';

export default function RestaurantContainer() {
  const dispatch = useDispatch();

  const { selectedRegionName, selectedCategoryId } = useSelector((state) => ({
    selectedRegionName: state.selectedRegionName,
    selectedCategoryId: state.selectedCategoryId,
  }));

  useEffect(() => {
    if (selectedRegionName === '' || selectedCategoryId === '') {
      return;
    }
    dispatch(loadRestaurant(selectedRegionName, selectedCategoryId));
  }, [selectedRegionName, selectedCategoryId]);

  const { restaurant } = useSelector((state) => ({
    restaurant: state.selectedRestaurant,
  }));
  return (
    <Restaurant restaurants={restaurant} />
  );
}
