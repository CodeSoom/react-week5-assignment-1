import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from '../component/Restaurants';

import { loadRestaurants } from '../modules/actions';

export default function RestaurantsContainer() {
  const { restaurants, regionId, categoryId } = useSelector((state) => ({
    restaurants: state.restaurants,
    regionId: state.regionId,
    categoryId: state.categoryId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (regionId && categoryId) {
      dispatch(loadRestaurants({ regionId, categoryId }));
    }
  }, [regionId, categoryId]);

  return <Restaurants restaurants={restaurants} />;
}
