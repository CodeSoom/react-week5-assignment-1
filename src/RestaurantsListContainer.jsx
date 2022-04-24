import { useSelector } from 'react-redux';

import RestaurantsList from './RestaurantsList';

export default function RestaurantsListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <RestaurantsList restaurants={restaurants} />
  );
}
