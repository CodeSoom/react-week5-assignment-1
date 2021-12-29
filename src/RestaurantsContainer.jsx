// redux에 대해서 알고, 레스토랑 목록을 스토어에서 가져와서 Restaurants컴포넌트에 넘겨줌
import { useSelector } from 'react-redux';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
}
