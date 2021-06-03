import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants, region, categoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    region: state.search.region,
    categoryId: state.search.categoryId,
  }));

  useEffect(() => {
    dispatch({
      region,
      categoryId,
    });
  }, []);

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
