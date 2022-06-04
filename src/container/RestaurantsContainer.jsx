import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import Restaurants from '../component/Restaurants';

import { loadRestaurants } from '../modules/actions';

export default function RestaurantsContainer() {
  const { restaurants, regionName, categorieId } = useSelector((state) => ({
    restaurants: state.restaurants,
    regionName: state.regionName,
    categorieId: state.categorieId,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (regionName && categorieId) {
      dispatch(loadRestaurants({ regionName, categorieId }));
    }
  }, [regionName, categorieId]);

  return <Restaurants restaurants={restaurants} />;
}
