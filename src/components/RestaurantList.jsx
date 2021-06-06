import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const infos = useSelector((state) => state.restaurant.selectedRestaurants);

  return (
    <ul>
      {infos.map(
        (info) => (
          <li key={info}>
            {info}
          </li>
        ),
      )}
    </ul>
  );
}
