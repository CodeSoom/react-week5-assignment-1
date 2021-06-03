import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const infos = useSelector((state) => state.restaurant.restaurants);

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
