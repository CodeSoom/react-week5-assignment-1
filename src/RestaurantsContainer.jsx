import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((selector) => ({
    restaurants: selector.restaurants,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
