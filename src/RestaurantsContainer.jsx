import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Restaurants from './Restaurants';
import { loadRestaurants } from './store/actions';

const RestaurantsContainer = () => {
  const { restaurants, categories, regions } = useSelector((state) => ({
    restaurants: state.restaurants,
    categories: state.categories,
    regions: state.regions,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadRestaurants(regions, categories));
  }, [categories, regions]);

  return (
    <Restaurants restaurants={restaurants} />
  );
};

export default RestaurantsContainer;
