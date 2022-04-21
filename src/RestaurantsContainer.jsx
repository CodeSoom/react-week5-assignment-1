import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants, selectRegionId, selectCategoryId } = useSelector((selector) => ({
    restaurants: selector.restaurants,
    selectRegionId: selector.selectRegionId,
    selectCategoryId: selector.selectCategoryId,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
      isSelectRegion={!!selectRegionId}
      isSelectCategory={!!selectCategoryId}
    />
  );
}
