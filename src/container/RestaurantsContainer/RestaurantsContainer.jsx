import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../../actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const {
    restaurants,
    region, categoryId,
  } = useSelector((state) => ({
    restaurants: state.restaurants,
    region: state.search.region,
    categoryId: state.search.categoryId,
  }));

  useEffect(() => {
    if (!region) {
      return;
    }

    // NOTE: id가 0이 있을 수도 있으므로 ''로 지정
    if (categoryId === '') {
      return;
    }

    dispatch(loadRestaurants({ region, categoryId }));
  }, [region, categoryId]);

  return (
    <ul>
      {restaurants.map((restaurant) => (
        <li key={restaurant.id}>
          {restaurant.name}
        </li>
      ))}
    </ul>
  );
}
