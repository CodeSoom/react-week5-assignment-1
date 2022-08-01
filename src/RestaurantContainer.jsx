import { useSelector } from 'react-redux';

export default function RestaurantContainer() {
  const { restaurants } = useSelector((state) => ({
    restaurants: state.restaurants,
  }));

  return (
    <>
      {restaurants.length !== 0 ? (
        <ul>
          {restaurants.map((restaurant) => (<li key={restaurant.id}>{restaurant.name}</li>))}
        </ul>
      ) : (
        <p>조건에 해당하는 식당이 없습니다.</p>
      )}
    </>
  );
}
