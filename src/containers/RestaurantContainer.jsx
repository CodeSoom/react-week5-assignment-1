import { useSelector } from 'react-redux';

import Restaurant from '../components/Restaurant';

export default function RestaurantContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  if (!restaurants || restaurants.length === 0) {
    return <>식당이 없어요!</>;
  }

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <Restaurant
          key={restaurant.id}
          restaurant={restaurant}
        />
      ))}
    </ul>
  );
}
