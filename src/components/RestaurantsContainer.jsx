import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../redux/actions';

export default function RestaurantContainer() {
  const { selectedCategoryId, selectedRegion, errorMessage } = useSelector((state) => ({
    selectedCategoryId: state.selectedCategoryId,
    selectedRegion: state.selectedRegion,
    errorMessage: state.errorMessage,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedRegion && selectedCategoryId) {
      dispatch(loadRestaurants(selectedRegion, selectedCategoryId));
    }
  }, [selectedCategoryId, selectedRegion]);

  return (
    null
  );
}
