import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants, selectRegionId } = useSelector((selector) => ({
    restaurants: selector.restaurants,
    selectRegionId: selector.selectRegionId,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
      isSelectRegion={!!selectRegionId}
    />
  );
}
