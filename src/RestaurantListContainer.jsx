import { useSelector } from 'react-redux';

export default function RestaurantListContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));
  return (
    <ul>
      {restaurants.map((restaurant) => <li key={restaurant.id}>{restaurant.name}</li>)}
    </ul>
  );
}
