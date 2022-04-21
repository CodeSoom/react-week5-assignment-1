import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const {
    restaurants,
    selectRegionId,
    selectCategoryId,
    loading,
  } = useSelector((selector) => ({
    restaurants: selector.restaurants,
    selectRegionId: selector.selectRegionId,
    selectCategoryId: selector.selectCategoryId,
    loading: selector.loading,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
      isSelectRegion={!!selectRegionId}
      isSelectCategory={!!selectCategoryId}
      loading={loading}
    />
  );
}
