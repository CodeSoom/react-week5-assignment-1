import { useEffect } from 'react';

import { useSelector, useDispatch } from 'react-redux';

import { getRestaurants } from '../store/async-actions';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { region, categoryId, restaurants } = useSelector((state) => ({
    region: state.selectedRegion,
    categoryId: state.selectedCategory,
    restaurants: state.restaurants,
  }));

  useEffect(() => {
    if (region && categoryId) {
      dispatch(getRestaurants({ region, categoryId }));
    }
  }, [region, categoryId]);

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
}
