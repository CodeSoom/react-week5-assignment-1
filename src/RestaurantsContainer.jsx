import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { searchRestaurants } from './async-actions';

import Restaurants from './Restaurants';

const RestaurantsContainer = () => {
  const dispatch = useDispatch();

  const region = useSelector((state) => state.selectedRegion);
  const category = useSelector((state) => state.selectedCategory);
  const restaurants = useSelector((state) => state.restaurants);

  useEffect(() => {
    if (region && category) {
      dispatch(searchRestaurants({ region, category }));
    }
  }, [region, category]);

  return (
    <Restaurants
      restaurants={restaurants}
    />
  );
};

export default RestaurantsContainer;
