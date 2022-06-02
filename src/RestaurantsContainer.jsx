import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RetaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  return <Restaurants restaurants={restaurants} />;
}
