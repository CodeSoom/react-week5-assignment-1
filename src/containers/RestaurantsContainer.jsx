import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { loadRestaurants } from '../actions';

import Restaurants from '../components/Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();
  const { restaurants, regionName, categoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    regionName: state.selectedRegionName.name,
    categoryId: state.selectedCategoryId.id,
  }));

  useEffect(() => {
    if (regionName && categoryId) {
      dispatch(loadRestaurants(regionName, categoryId));
    }
  }, [regionName, categoryId]);

  return (
    <>
      <Restaurants restaurants={restaurants} />
    </>
  );
}
