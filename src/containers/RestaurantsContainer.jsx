import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { loadRestaurants } from '../actions';
import Restaurants from '../Restaurants';

export default function RestaurantsContainer() {
  const dispatch = useDispatch();

  const { restaurants } = useSelector((state) => state.restaurants);
  const { regions, activeId: regionActiveId } = useSelector((state) => state.regions);
  const { activeId: categoryActiveId } = useSelector((state) => state.categories);

  const targetRegion = regions.find((region) => region.id === regionActiveId) || '';

  useEffect(() => {
    if (targetRegion) {
      dispatch(loadRestaurants({ regionName: targetRegion.name, categoryId: categoryActiveId }));
    }
  }, [regionActiveId, categoryActiveId]);

  return (
    <Restaurants restaurants={restaurants} />
  );
}
