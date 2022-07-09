import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getRestaurants } from '../store/async-actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, categoryId, restaurants } = useSelector((state) => ({
    region: state.selectedRegion,
    categoryId: state.categoryId,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    dispatch(getRestaurants({ region, categoryId }));
  }, []);

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
