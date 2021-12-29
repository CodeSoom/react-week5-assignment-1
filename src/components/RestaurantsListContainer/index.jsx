import { useSelector } from 'react-redux';
import RestaurantsList from './RestaurantsList';

export default function RestaurantsListContainer() {
  const { restaurants } = useSelector((state) => state);
  return (<RestaurantsList restaurants={restaurants} />);
}
