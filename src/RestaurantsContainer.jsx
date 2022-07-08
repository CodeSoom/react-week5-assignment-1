import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { searchRestaurants } from './async-actions';

const RestaurantsContainer = () => {
  const dispatch = useDispatch();

  const region = useSelector((state) => state.selectedRegion);
  const category = useSelector((state) => state.selectedCategory);
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    dispatch(searchRestaurants({ region, category }));
  }, []);

  return (
    <ul>
      {restaurants.map(({ id, name }) => (
        <li key={id}>{name}</li>
      ))}
    </ul>
  );
};

export default RestaurantsContainer;
