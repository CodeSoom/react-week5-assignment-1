import { useSelector } from 'react-redux';

export default function RestaurantList() {
  const infos = useSelector((state) => state.selected.restaurants);

  return (
    <ul>
      {infos.map(
        (info) => (
          <li key={info.id}>
            {info.name}
          </li>
        ),
      )}
    </ul>
  );
}
