import Restaurants from './Restaurants';

import { restaurants } from '../fixtures/fixture';

export default function RestaurantsContainer() {
  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
