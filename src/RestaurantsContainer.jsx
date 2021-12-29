import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from './actions';

import Restaurants from './Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { restaurants, regionName, categoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    regionName: state.selectedRegion.name,
    categoryId: state.selectedCategory.id,
  }));

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(loadRestaurants(regionName, categoryId));
    }
  }, [regionName, categoryId]);

  return (
    <>
      <Restaurants
        restaurants={restaurants}
      />
    </>
  );
}
