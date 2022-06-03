import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux/actions';

export default function RestaurantContainer() {
  const { selectedCategoryId, selectedRegionId, errorMessage } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
    selectedRegionId: state.selectedRegionId,
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegionId && selectedCategoryId) {
      dispatch(loadRestaurants(selectedRegionId, selectedCategoryId));
    }
  }, [selectedCategoryId, selectedRegionId]);

  return (
    null
  );
}
