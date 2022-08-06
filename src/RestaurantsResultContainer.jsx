import { useSelector } from 'react-redux';

import RestaurantsResult from './RestaurantsResult';

export default function RestaurantsResultContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <RestaurantsResult
      restaurants={restaurants}
    />
  );
}
