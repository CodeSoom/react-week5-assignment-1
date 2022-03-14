import { useSelector } from 'react-redux';

import { get } from './utils';

export default function RestaurantsContainer() {
  const restaurants = useSelector(get('restaurants'));

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>
          {name}
        </li>
      ))}
    </ul>
  );
}
