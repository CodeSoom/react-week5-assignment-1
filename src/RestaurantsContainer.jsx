import { useSelector } from 'react-redux';
import Restaurants from './Restaurants';

export default function RestaurantContainer() {
  const { restaurantsList } = useSelector((state) => ({
    restaurantsList: state.restaurantsList,
  }));

  return (
    <Restaurants
      restaurants={restaurantsList}
    />
  );
}
